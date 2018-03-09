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
<div>
  <div class="card h-100" >
    <div :style="{
      height: '140px', 
      backgroundImage:'url('+image+')',
      backgroundSize: 'cover',
      backgroundPosition:'center',
    }">
    </div>
    <div class="card-body">
      <div class="text-center">
        <h5 class="card-title">{{title}}</h5>
      </div>
      <p class="card-text" style="margin-bottom:30px"><slot></slot></p>
      <div class="text-center" style="position:absolute; bottom:5px;width:100%;">
       <a v-if="label&&link" :href="link" class="btn btn-primary">{{label}}</a>
      </div>
    </div>
  </div>
</div>
    `
    
  })