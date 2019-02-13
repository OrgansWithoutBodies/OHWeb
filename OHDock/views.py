from django.shortcuts import render
from django.contrib.auth.models import User, Group

from rest_framework import serializers, viewsets, routers
from .serializers import * 
# Create your views here.
class DonorViewSet(viewsets.ModelViewSet):
    queryset = Donor.objects.all()
    serializer_class = DonorSerializer

class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer


class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer



class ReceiptView():
    pass
# class Receipt(object): #only sees list of don objects, interfaced with either when a donation is saved or when ppl want a receipt of old donations
    
#     def __init__(self,dons):#dons must be a list all from same person -  
#         super(Receipt,self).__init__()
#         url='http://opportunityhouse.us/'
#         twi='https://twitter.com/VacavilleOHouse'
#         inst='https://www.instagram.com/opportunitythrift/'
#         ratio=[1,2]#doesn't rly make sense w changing len
#         self.defres=300#don't change this, used to scale items on pg
#         self.res=1000
#         self.name=dons[0].donor.stringName #name should b the same for all don's
#         self.n=len(dons)
#         self.dons=dons
#         self.imsize=tuple([self.res*i for i in ratio])
        
#     @property 
#     def resrat(self):
#         return self.res/self.defres
#     def centerfn(self,c,imsize=None):
#         if imsize==None:
#             imsize=self.imsize
#         return [round(imsize[i]*c[i]) for i in range(len(c))]   
#     def render(self):#break up receipt into 3 sections?
#         #SECTIONS:
#             #Logo
#             #Donations
#             #---Don1 (total 0)
#             #---....
#             #Tax Blurb
#             #Social Media stuff
            
            
#         #printer width - 80mm - 203x203 dots per inch
        
#         ndons=len(self.dons)#number of discrete donations
#         ndonlines=[len(i.items) for i in self.dons ] #list w numbers of lines per donation
#         taxid='68-0364021'
#         taxblurb="No goods or services were \n received in return for this contribution. Thank You!"
# #        d=int([])#TEMP
#         d=0
#         totalblurb="Total: $"+str(d)+".00"
        
#         #LOGO
#         logo=Image.open(open(os.path.join(wd,'Visuals','Logo','bwlogo.png'),'rb'))
#         logores=round(750)
#         logorat=logo.size[1]/logo.size[0] #make x coord=1.join*
#         logo=logo.resize((logores,round(logores*logorat)))#maintains aspect ratio
#         logosect=Image.new('RGB',self.imsize,color="white")
        
#         self.img=Image.new('RGB',self.imsize,color="white")
#         #topsect=ImageDraw.Draw()
#         cropbox=[(self.img.size[0]-logo.size[0])/2,0,(self.img.size[0]+logo.size[0])/2,logo.size[1]]
        
#         logosect.paste(logo,[round(x) for x in cropbox])
#         logosect=logosect.crop([0,0,self.imsize[0],logo.size[1]])
#         logosz=logosect.size[1]
#         #img=Image.new('RGB')
#         #receipt header: ~20, each donation: 5, each line: 2, bottom: ~10? sm ratio like that 
# #        multdict=dict([[] for i in self.items.keys()])}
# #        multidict['Dump Fee']='$'
        
#         dontxtstr=[' \n '.join([*['$: '.join([str(i.items[j]),str(j)]) if j=='Dump Fee' else 'x: '.join([str(i.items[j]),str(j)]) for j in i.items.keys()],totalblurb]) for i in self.dons]
#         #i=self.dons[0]
        
#         #dontxtstr=' \n '.join(['x: '.join([str(i.items[j]),str(j)]) for j in i.items.keys()])
#         #print(dontxtstr)
#         d=ImageDraw.Draw(self.img)
#         f=ImageFont.truetype('timesbd.ttf',round(13*self.resrat))
#         dlf=ImageFont.truetype('timesbd.ttf',round(13*self.resrat))
          
#         dist=30 #distance between donation header and first don
#         dldist=30#distance between each donline
#         lasty=0#y pos last part went to, useful in placing 
#         rhsbuffer=10 #how far adjusted text is from right hand side
        
#         donsect=Image.new('RGB',self.imsize,color="white")
#         dond=ImageDraw.Draw(donsect)
#         for i in range(len(self.dons)):#EACH i IS A DONATION, with its own items
            
#             date=self.dons[i].date.date()
            
#             if i==0: 
#                  donstr="On %s, %s donated:"%(str(date),self.name) #don
#                  print(donstr)
#                  #place don
#             else:
#                 donstr="And on %s, %s also donated:"%(str(date),self.name)
#                 #place these dons
           
#             #sizes
#             dtsize=ImageDraw.ImageDraw.multiline_textsize(dond,text=donstr, font=f)
#             dlattsize=ImageDraw.ImageDraw.multiline_textsize(d,text=dontxtstr[i], font=dlf,spacing=dldist)
            
#             tempy=lasty+dtsize[1]+dlattsize[1]+dist #temporary lasty, here used to make sure text won't be off the page - temporary?
#             if tempy>=donsect.size[1]:
#                 pass#change size
#             else:
#                 #placing text
#                 dond.text([self.imsize[0]-(dtsize[0]+rhsbuffer),lasty],text=donstr,font=f,fill='black')
#                 dond.multiline_text([self.imsize[0]-(dlattsize[0]+rhsbuffer),round(dtsize[1]+lasty)],text=dontxtstr[i],font=dlf,spacing=dldist,fill='black')
#             #d.multiline_text([self.imsize[0]-dlattsize[0]-round(self.resrat*10),logo.size[1]+round(((n)*dist)*self.resrat)],text=dontxtstr[i],font=f,spacing=dist,fill='black')
#                 lasty=tempy
#            # recsect.paste(donsect.crop())
#             #self.tag.paste(attag.crop(attbox),box,mask=ImageOps.invert(attag.crop(attbox)))
#         donsect=donsect.crop([0,0,self.imsize[0],lasty])
#         donsz=donsect.size[1]
        
        
        
#         #tax
#         taxsect=Image.new('RGB',self.imsize,color="white")
#         taxd=ImageDraw.Draw(taxsect)
#         taxf=ImageFont.truetype('timesbd.ttf',round(11*self.resrat))
#         taxstr='501(c)(3) tax#: '+taxid+ ' - ' +taxblurb
#         taxsz=taxd.multiline_textsize(text=taxstr,font=taxf)[1]
#         taxd.multiline_text(self.centerfn([.075,0]),text=taxstr,font=taxf,fill='black') #need to center this
#         taxsect=taxsect.crop([0,0,self.imsize[0],taxsz])
        
#         #soc
#         socheight=.3
        
#         socsect=Image.new('RGB',[self.imsize[0],round(socheight*self.res)],color="white")
#         socd=ImageDraw.Draw(socsect)
#         socf=ImageFont.truetype('timesbd.ttf',round(10*self.resrat))
#         soc={'insta':{'page':'@OpportunityThrift','c':[.1,.15],'tc':[-.9,.2]},
#                       'twitter':{'page':'@VacavilleOHouse','c':[.1,.95],'tc':[-.9,.9]},
#                       'fb':{'page':'OpportunityHouseVV','c':[.9,.15],'tc':[3.4,-.5]},
#                       'web':{'page':'www.OpportunityHouse.US','c':[.9,.95],'tc':[3.4,.25]}}#key acts as filename, value is center%
#         for j in soc.keys():
#             c=self.centerfn(soc[j]['c'],imsize=socsect.size)#returns percentage into pixels
            
#             setattr(self,j,Image.open(open(os.path.join(wd,'Visuals','Social','%s.png'%j),'rb')))
#             q=getattr(self,j)
#             q=q.resize((round(q.size[i]*self.img.size[0]/(q.size[0]*10)) for i in [0,1])) #makes all same size in x
            
#             tsize=ImageDraw.ImageDraw.multiline_textsize(socd,text=soc[j]['page'])[0]
#             b=[round(c[i]-q.size[i]*soc[j]['c'][i]) for i in range(len(c))]#box
#             tb=[round(c[i]-tsize*soc[j]['tc'][i]) for i in range(len(c))]#textbox
        
#             socsect.paste(q,b,q)#do smth abt size
#             #textgap=[0.15,.025]
#             textgap=[0,0]
#             if soc[j]['c'][0]<.5:  #LHS SCALING
#                 sign=-0
#             else:#RHS SCALING
#                 sign=-2.5
#             socd.text(tb,text=soc[j]['page'],font=socf,fill='black')
#         socsz=socsect.size[1]
# #        socsz=0
# #        
#        #PASTE EVERYTHING HERE FOR EASE OF READING
#         size=0
        
#         rcptim=Image.new('RGB',[self.imsize[0],logosz+donsz+taxsz+socsz],color='white')
#         for i in [logosect,donsect,taxsect,socsect]:
#             nsize=size+i.size[1] 
#             print(nsize,rcptim.size)
#             rcptim.paste(i,(0,size))
#             size=nsize
#        #logosect
#         #donsect
#         #taxsect
#         #socsect
#         return rcptim
#           