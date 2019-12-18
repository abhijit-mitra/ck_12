var Shell = function(){
  const obj={
    init: function(selector){
      const self = this;
      self.selector = selector;
    },
    render: function(){
      const self = this;
      const wrapper = document.querySelector(self.selector);
      let shell = '<div class="container border p-30">';
          shell+='</div>';
      wrapper.innerHTML =  shell;
    },
    renderTOC: async function(){
      const self = this;
      const res = await fetch('http://localhost:3000/api/book/maths');
      const data = await res.json();
      const accordian = new Accordian();
      accordian.init('.container',{
        data: data.response
      });
      accordian.render();
    }
  };
  return obj;
};
