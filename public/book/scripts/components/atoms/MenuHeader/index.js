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
    const dom = `<div id='${props.id}' class='row menu-header border p-20-10 cursor-pointer'>
                    <div class="col-md-12">
                      <b>${props.title}</b>
                    </div>
                  </div>`;
    wrapper.innerHTML =  dom;
  }
}
