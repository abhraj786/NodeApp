import {OAuth} from 'forcejs';


let oauth = OAuth.createInstance("3MVG9Se4BnchkASkDDWStZiMCM.fbsXn54GCo_FZ8Np7VW4FSGbCo4OBuzPx2G0VMmgGyihTsJN9j_OD9GOpv"
                                ,"https://test.salesforce.com",
                                "https://ltngoutapp.herokuapp.com/oauthcallback.html"
                                );
oauth.login()
    .then(oauthResult => {
        //console.log(oauthResult);
        renderLightningOutComponent(oauthResult);
    });

let renderLightningOutComponent = (oauthResult) => {
    const token = oauthResult.accessToken;
    const lightningEndPointURI = "https://flow-inspiration-9123-dev-ed.lightning.force.com";
    $Lightning.use("c:youtubesearchOutApp", () => {
        $Lightning.createComponent("c:youtubesearch", {},
           "youtubeApp",
            (cmp) => {
               //Component COde
            });
  },lightningEndPointURI,token );

}