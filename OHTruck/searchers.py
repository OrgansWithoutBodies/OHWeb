import math
#Metric Matrices - gets passed set of endpoints, calculates all distances, so that can be used for routing - parallelizable
class Metric(object):
	def __str__(self):
		return self.value
	def __init__(self,points):
		self.endpoint,self.startpoint=endpoint,startpoint
	def measureTable(self):
		pass
	def measure(self):
		return None
class euclideanMetric(Metric):
	pass
	def measure(self):
		return math.sqrt((self.endpoint[0]-self.startpoint[0])**2+(self.endpoint[1]-self.startpoint[1])**2)

class taxiMetric(Metric):
	pass
class osrmMetric(Metric):#routingMetric?
	pass

###################

class Searcher(object):
	def __init__(self,locations,metric,startnode=0,numroutes=1,*arg,**kw):
		self.locations=locations
		self.metric=metric

		self.bestRoute=None

		self.currentNode=startnode
		self.currentRoute=[self.currentNode]

		self.run()
	def searchStep(self,fromNode,*arg,**kw):#STEP - whole round of decisionmaking - from current node, what next node to take (doesn't work w genetic?)
		self.isRunning=False#default action is to just end 

	def run(self):
		self.isRunning=True
		while self.isRunning:
			self.searchStep(self.currentNode)

class geneticSearcher(Searcher):
	pass

class greedySearcher(Searcher):
	def searchStep(self,fromNode):#for each step, go for closest
		if len(self.currentRoute)!=len(self.locations):
			searchedInStep={}
			minNode=None
			for l in range(len(self.locations)):#for ever node
				if l not in self.currentRoute and l not in searchedInStep.keys():
					meas=self.metric(self.locations[fromNode],self.locations[l]).measure()
					if meas>0:
						searchedInStep[l]=meas
						if minNode is not None:
							if searchedInStep[minNode]>searchedInStep[l]:
								minNode=l
						else:
							minNode=l

			self.currentRoute.append(minNode)

		else:
			self.isRunning=False
class bruteSearcher(Searcher):
	def searchStep(self):
		for l in self.locations:
			l
