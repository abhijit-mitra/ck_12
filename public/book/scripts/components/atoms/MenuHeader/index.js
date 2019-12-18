var MenuHeader = function(){
  Component.call(this);
  this.init = function(selector, props){
    const self = this;
    self.selector = selector;
    self.props = props;
  };
  this.render = function(){
    const self = this;
    const {selector, props} = self;
    const wrapper = document.querySelector(selector);
    const dom = `<div id='${props.id}' class='menu-header border p-20 cursor-pointer ${props.class}' ${props.disabled? 'disabled':''}>
                          <b>${props.label}</b>
                      </div>`;
    wrapper.innerHTML =  dom;
  }
}
