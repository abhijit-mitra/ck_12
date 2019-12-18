var MenuItems = function(){
  Component.call(this);
  this.init= function(selector, props){
      const self = this;
      self.selector = selector;
      self.props = props;
    },

  this.render= function(){
      const self = this;
      const {selector, props:{data}} = self;
      const wrapper = document.querySelector(selector);
      let dom = '';
      for(let i=0;i< data.length; i++){
        dom +=`<div id='menu-item-${data[i].id}' class='row menu-item border p-20-30 theme-color'>
                  <div class="col-md-10">
                    <b>${data[i].sequenceNO}. ${data[i].title}</b>
                  </div>
                  <div class="col-md-2">
                    <b>${data[i].status || 'INCOMPLETE'}</b>
                  </div>
                </div>`;
      }
      wrapper.innerHTML =  dom;
    }
}
