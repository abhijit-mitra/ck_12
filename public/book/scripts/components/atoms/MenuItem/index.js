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
        dom +=`<div id='menu-item-${data[i].id}' class='menu-item border p-20 cursor-pointer theme-color'>
                  <b>${data[i].title}</b>
                </div>`;
      }
      wrapper.innerHTML =  dom;
    }
}
