Vue.component('message',{
    'props':['username','message'],
    'template':`<div v-show="isVisible" class="panel panel-default">
                    <div class="panel-heading">
                    {{username}}
                    <span @click="isVisible = false" class="glyphicon glyphicon-remove pull-right"></span>
                    </div>
                    <div class="panel-body">
                      {{message}}
                    </div>
                </div>`,
    'data':function () {
        return {
            isVisible:true
        }
    }
});
