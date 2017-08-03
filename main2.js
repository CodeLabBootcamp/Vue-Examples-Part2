Vue.component('msg',{
   'props':['title','body'],
   'template':`
               <div v-show="isVisible" class="panel panel-default">
                  <div class="panel-heading">
                     <h3 class="panel-title">
                        {{title}}
                        <span @click="isVisible = false" class="glyphicon glyphicon-remove pull-right"></span>
                     </h3>
                  </div>
                  <div class="panel-body">
                     {{body}}
                  </div>
                  <div class="panel-footer">
                     copyright ®️
                  </div>
               </div>
            `,
   'data':function(){
      return{
         isVisible:true
      }
   }
});


Vue.component('user',{
   'props':['id','username'],
   'template':`
               <div class="panel panel-default">
                  <div class="panel-heading">
                     <h3 class="panel-title">{{id}}</h3>
                  </div>
                  <div class="panel-body">
                     {{username}}
                  </div>
                  <div class="panel-footer">
                     copyright ®️
                  </div>
               </div>
            `,
});

Vue.component('usr',{
   'props':['obj'],
   'template':`
               <div class="panel panel-default">
                  <div class="panel-heading">
                     <h3 class="panel-title">{{obj.id}}</h3>
                  </div>
                  <div class="panel-body">
                     {{obj.username}}
                  </div>
                  <div class="panel-footer">
                     copyright ®️
                  </div>
               </div>
            `,
});
