#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Mon Feb 18 20:17:03 2019

@author: v
"""
import random
testenv=[[0, 68.4, 423.4, 423.4, 249, 216, 363.3],
 [65.2, 0, 450.8, 450.8, 276.4, 243.4, 390.7],
 [425.3, 449.5, 0, 0, 601.3, 541.6, 335],
 [425.3, 449.5, 0, 0, 601.3, 541.6, 335],
 [225.1, 249.3, 567.3, 567.3, 0, 81.6, 507.2],
 [225.8, 250, 542, 542, 109.5, 0, 481.9],
 [360.4, 384.6, 338.9, 338.9, 536.4, 476.7, 0]]
class Path(object):
    def __init__(self,seed,environment):
        self.environment=environment
        
    
    
    def fitness(self,member,path):
        l=len(path)
        score=sum([self.environment[p][(p+1)%l] for p in path])
        return score
    
class Population(object):
    def __init__(self,popsize,generations,environment):
        randfn=random.random
        self.environment=environment
        self.paths=[Path(seed=randfn(),environment=environment)]
        

