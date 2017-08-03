Vue.component('task',{
   'template':`<li style="color:red"><slot></slot></li>`
});


Vue.component('list',{
   'template':`<div><slot></slot><li v-for="list in lists">{{list}}</li></div>`,
   'data'(){
      return {
         lists:['A','B','C','D']
      }
   }
});


Vue.component('task-list',{
   // 'template':`<div>
   //                <tl><slot></slot></tl>
   //             </div>`
   'template':`<div>
                  <tl>aa</tl>
                  <tl>bb</tl>
               </div>`
});


Vue.component('tl',{
   'template':`<li style="color:red"><slot></slot></li>`
});
