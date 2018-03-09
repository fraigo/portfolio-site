Vue.component('bcard', {
    props:{
        title:String,
        label:String,
        image:String,
        link:String
    },
    created:function(){
        this.imageUrl='url('+this.image+')';
    },
    template: `
<div class="card" style="width: 18rem;">
  <div :style="{
    height: '140px', 
    backgroundImage:'url('+image+')',
    backgroundSize: 'cover',
    backgroundPosition:'center',
  }">
  </div>
  <div class="card-body">
    <h5 class="card-title">{{title}}</h5>
    <p class="card-text"><slot></slot></p>
    <a v-if="label&&link" :href="link" class="btn btn-primary">{{label}}</a>
  </div>
</div>
    `
    
  })