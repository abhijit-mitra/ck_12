var Error = function(){
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
    const dom = `<div class="alert alert-danger row p-20-30 m-b-0" role="alert">
                    <div class="col-md-12">
                      ${props.title}
                    </div>
                </div>`;
    wrapper.innerHTML =  dom;
  }
}
