import math
import random 
import urllib.request as req
import json

#Metric Matrices - gets passed set of endpoints, calculates all distances, so that can be used for routing - parallelizable
#@todo some way of making sure start and end @ same spot
#two behaviors: 1 - blank matrix, if pairing is called then is calculated (efficient for sparse) 2 - all calculated (big upfront if not vectorized)

OHLatLon=38.353184, -121.975337
testroute=[OHLatLon,
        [38.348436,-121.975775],
           [38.3766753333333,-122.008309333333],
           [38.3766753333333,-122.008309333333],
           [38.3569062001775,-121.95132319275],
           [38.3561118958738,-121.957920897068],
           [38.358993663018,-122.016317948811]]
class Metric(object):
	def __str__(self):
		return self.value
	def __init__(self,points):
		self.points=points
	def measureTable(self):
		pass
	def measure(self):
		return None
class euclideanMetric(Metric):
	pass
	def measure(self,endpoint,startpoint):
		return math.sqrt((endpoint[0]-startpoint[0])**2+(endpoint[1]-startpoint[1])**2)

class taxiMetric(Metric):
	pass
class osrmMetric(Metric):#
#name routingMetric & have osrm be subset? 
	def __init__(self,*args,**kw):
		super(osrmMetric,self).__init__(*args,**kw)
		self.measureTable()
	def measure(self,endpoint,startpoint):
		return self.table[endpoint][startpoint]
	def measureTable(self,baseurl='http://localhost:5000/'):#baseurl is where routing server (here OSRM) is configured - ideally self hosted but should work on any api w auths
		url=baseurl+'table/v1/driving/'+';'.join([','.join([str(p[1]),str(p[0])]) for p in self.points])
		resp=req.urlopen(url).read()
		self.table=json.loads(resp)['durations']
		return self.table
    # for (var c=0;c<coords.length;c++){
    #   coordlist.push(coords[c][1]+','+coords[c][0])
    # }
    # var coorduri= coordlist.join(';')
    # const uri=routeep+'table/v1/driving/'+coorduri

###################

class Searcher(object):
	def __init__(self,locations,metric,startnode=None,endnode=None,numroutes=1,*arg,**kw):
		self.locations=locations
		self.metric=metric

		self.bestRoute=None

		if startnode is not None:
			self.currentNode=startnode
		else:
			self.currentNode=random.randint(0,len(locations))
			
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
		print(self.locations,fromNode,self.currentRoute)
		if len(self.currentRoute)!=len(self.locations):
			searchedInStep={}
			minNode=None
			for l in range(len(self.locations)):#for ever node
				if l not in self.currentRoute and l not in searchedInStep.keys():
					print(fromNode,l)
					meas=self.metric(self.locations).measure(fromNode,l)
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
#warshall? https://en.wikipedia.org/wiki/Floyd%E2%80%93Warshall_algorithm https://stackoverflow.com/questions/36953197/which-is-the-best-algorithmtime-complexity-to-find-the-shortest-path