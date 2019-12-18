var Loader = function(){
  Component.call(this);
  this.init = function(selector){
    const self = this;
    self.selector = selector;
  };
  this.render = function(){
    const self = this;
    const {selector} = self;
    const wrapper = document.querySelector(selector);
    const dom = `<div class="d-flex justify-content-center h-100px align-items-center">
                  <div class="spinner-border" role="status">
                    <span class="sr-only">Loading...</span>
                  </div>
                </div>`;
    wrapper.innerHTML =  dom;
  }
}
