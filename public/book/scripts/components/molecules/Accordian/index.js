var Accordian = function(){
  Component.call(this);
  this.init=function(selector, props){
      const self = this;
      self.selector = selector;
      self.props = props;
      self.open = {};
      self.menuData = {};
      self.menuItems = {};
    };

  this.handleMenuHeaderClick= async function(props) {
    const self = this;
    let data;
    self.open = {
      ...self.open,
      [props.value]:!self.open[props.value]
    };

    if(self.open[props.value]){
      if (self.menuData.hasOwnProperty(props.value)){
         data = self.menuData[props.value];
      }else{
        const res = await fetch(`http://localhost:3000/api/book/maths/section/${props.value}`);
        data = await res.json();
        data = data.response;
        self.menuData={
          ...self.menuData,
          ...data
        }
        data = data[props.value]
      }
      self.renderMenuItems(`#menu-items-wrapper-${props.value}`, data || [], props.value);
    }else{
      self.remove(`#menu-items-wrapper-${props.value}`);
    }
  };

  this.handleMenuItemClick= function(value) {
      console.log(value);
  };

  this.render= function(selector){
      const self = this;
      const {props:{data}} = self;
      const wrapper = document.querySelector(self.selector);
      let dom = '';
      for(let i=0;i<data.length;i++){
        dom += `<div class='accordian' id='accordian-${data[i].id}'>
                  <div class='menu-header-wrapper' id='menu-header-wrapper-${data[i].id}'></div>
                  <div class='menu-items-wrapper' id='menu-items-wrapper-${data[i].id}'></div>
                </div>`;
      }
      wrapper.innerHTML = dom;
      self.renderMenuHeaders();
  };

  this.renderMenuHeaders= function(){
    const self = this;
    const {props:{data}} = self;
    for(let i=0;i<data.length;i++){
      console.log(`menu-header-wrapper-${data[i].id}`);
      const menuHeader = new MenuHeader();
      menuHeader.init(`#menu-header-wrapper-${data[i].id}`,{
        id:`menu-header-${data[i].id}`,
        class:'',
        label:data[i].title,
        value:data[i].id
      });
      menuHeader.render();
      menuHeader.addEvents('click', self.handleMenuHeaderClick.bind(self));
    }
  }

  this.renderMenuItems= function(selector, data, id){
    const self = this;
    const {props} = self;
    const menuItems = new MenuItems();
    self.menuItems[id] = menuItems;
    menuItems.init(selector,{
        data: data
    });
    menuItems.render();
    }
  }
