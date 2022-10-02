

  webix.editors.$popup.text = {
    view:"popup",
    body:{
      view:"textarea",
      width:250,
      height:50
    }
  };

  webix.editors.$popup.color = {
    view:"popup",
    body:{
      view:"colorboard",
      width:200,
      height:200,
      rows:20,
      cols:20
    }
  };

  webix.editors.$popup.date = {
    view:"popup",
    body:{
      view:"calendar",
      width: 220,
      height:200
    }
  };

  webix.editors.$popup.richselect = {
    view:"suggest",
    body:{
      view:"list",
      select:true
    }
  };