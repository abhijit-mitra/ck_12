const Component = function(){
    this.append=function(referenceNode, elm){
      referenceNode.parentNode.insertBefore(elm, referenceNode.nextSibling);
    };
    this.prepend=function(referenceNode, elm){
      referenceNode.parentNode.insertBefore(referenceNode.nextSibling, elm);
    };
    this.uodateAttribute=function(elm_id, key, value){
      const self = this;
      const {props} = self;
      const el = document.getElementById(elm_id);
      el.setAttribute(key, value);
    };
    this.createElement=function(obj){
      const self = this;
      const elm = document.createElement(obj.tag);
      for(let i=0;i<Object.keys(obj.attr);i++){
        elm.setAttribute(obj.attr[i].name, obj.attr[i].value);
      }
    };
    this.addEvents=function(event_name, callback){
      const self = this;
      const {props} = self;
      const btn_elm = document.getElementById(props.id);
      btn_elm.addEventListener(event_name, ()=>callback.bind(self)(props));
    }
    this.remove=function(query_elm){
        const self = this;
        const wrapper = document.querySelector(query_elm);
        wrapper.innerHTML = '';
    }
    this.addClass=function(elm_id, className){
      const elm = document.getElementById(elm_id);
      elm.classList.add(className);
    }
    this.removeClass=function(elm_id, className){
      const elm = document.getElementById(elm_id);
      elm.classList.remove(className);
    }
}
