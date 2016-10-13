class growMainView {
  beforeRegister(){
    this.is = "grow-main-view";
    this.properties = {
      things: {
        type: Array
      },
      status:{
        type: String
      },
      notCordova:Boolean,
      mwcRoute:{
        type:Object,
        name:"dashboard",
        params:{"view":"home"}
      }
    };
  }

  get behaviors(){
    return [
      mwcMixin, mwcRouter
    ];
  }

  resetLayout(){
    this.$.headerPanel.resetLayout();
  }

  tracker() {
    this.set("status",Meteor.status().status);
    if(!Meteor.isCordova){
      this.notCordova = true;
    }
    this.subscribe('Things.list');
    let things = Things.find({}).fetch();
    this.set('things', things);
  }
}

Polymer(growMainView);
