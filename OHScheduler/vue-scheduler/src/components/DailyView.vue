<template>
<div>
<input type="checkbox" v-model="hideunassigned">hide unassigned employees</input><p>
Split hour into:<button @click="minchunks=minchunks-1">+</button>{{60/minchunks}} min chunks
<button @click="minchunks=minchunks+1">-</button>


<select v-model="selteam">
<option value="all">all teams</option>
<option value="no">no teams</option>
</select>

<button @click="stepstart(-1)">-</button>
Open: {{start}}
<button @click="stepstart(+1)">+</button>
	<div class="timeslots">
		<div v-for="h in hourslots" class="hourbox">
			<span class="hourlbl">{{h}}</span>
				<div class="minbox">
				<div v-for="m in minchunks" class="minchunk">
					:{{60/minchunks*m}}
				</div>
				</div>
		</div>
	</div>
<button @click="stepend(-1)">-</button>
Close: {{end}}
<button @click="stepend(+1)">+</button>


</div>
</template>
<script>
export default {
	name: "DailyView",
	computed:{
		hourslots:function(){
			const range = (a, b) => (a>=b) ? [] : [a, ...range(a+1, b)]

			return range(this.start,this.end)
		},
	},
	methods:{
		stepend:function(sign){
			if (sign==+1 && this.end==24){
					return this.end
			}
			else if(sign==-1 && this.end==this.start+1){
				return this.end
			}
			else{
			this.end=this.end+sign
			}
		},
		stepstart:function(sign){
			if (sign==-1 && this.start<1){
					return this.start
			}
			else if(sign==1 && this.start==this.end-1){
				return this.start
			}
			else{
			this.start=this.start+sign
			}
		}

	},
	data(){
		return{
			start:8,
			end:21,
			minchunks:4,
			hideunassigned:true,
			test:'test',
			selteam:'all'
		}
	}
}
</script>
<style scoped>
.timeslots{
	display:grid;
	scroll-direction:horizontal;
	width:100%;
	overflow-x:scroll;
	overflow-y:hidden;
	grid-template-columns: repeat(24, minmax(200px,1fr));
	grid-template-rows:100px;
}

.hourbox{
	display:inline-grid;
	font-size:30px;
	grid-template-rows: repeat(auto-fit, minmax(50px,1fr));
}
.minbox{
	font-size:20px;
	display:inline-grid;
	grid-template-columns: repeat(auto-fit, minmax(30px,1fr));
	border:1px solid gray;
}
.hourlbl::after, .hourlbl::before{
	content:"";
	width:10px;
	height:9px;
	margin:5px;
	background-color:red;
}
</style>