Vue.component('bprofile', {
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
    <div class="text-center">
            <img class="rounded-circle" :src="image" alt="Image" width="140" height="140">
            <h2>{{title}}</h2>
            <p><slot></slot></p>
            <p v-if="label&&link"><a class="btn btn-secondary" :href="link" role="button">{{label}}</a></p>
          </div>
    <div>
    `
    
  })