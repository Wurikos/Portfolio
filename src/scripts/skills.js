import Vue from "vue";

const skill = {
  template: "#skill",
  props: {
  skillName: String,
  killPercent: Number
},
methods: {
  drawColoredCircle() {
  const circle = this.$refs["color-circle"];
  const dashArray = parseInt(
   getComputedStyle(circle).getPropertyValue("stroke-dasharray")
  );
  const percent = (dashArray / 100) * (100 - this.skillPercent);
  
   circle.style.strokeDashoffset = percent;
   }
   },
mounted() {
  this.drawColoredCircle();
}
  };
const skillsRow ={
  template: '#skills-row',
  components:{skill}
}

new Vue ({
  el:"#skills-component",
  template: "skills-list",
  data: () => ({
    skills: []
}),
components:{skillsRow},
  created(){
  const data = require('../data/skills.json');
  this.skills = data;
    }
});
