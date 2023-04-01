export default function router(app) {
  app.get("/", (req, res) =>
    res.render("home", {
      title: "Game.you",
      description: "Home page description",
      stylesheet: "home"
    })
  );

  app.get("/hollowknight", (req, res) =>
    res.render("hollowKnight", {
      title: "Hollow Knight",
      description: "Hollow Knight description",
      stylesheet: "hollowKnight"
    })
  );
  
  app.get("/deadCells", (req, res) =>
    res.render("deadCells", { 
      title: "Dead Cells",
      description: "Dead Cells description",
      stylesheet: "deadCells"
    })
  );

  app.get("/dontStarve", (req, res) =>
    res.render("dontStarve", {
      title: "Dont Starve",
      description: "Dont Starve description",
      stylesheet: "dontStarve"
    })
  );

  app.get("/oxygenNotIncluded",(req, res) =>
    res.render("oxygenNotIncluded",{
      title: "Oxygen Not Included",
      description: "Oxygen Not Included description",
      stylesheet: "oxygenNotIncluded"
    })
  );

  app.get("/hearthstone",(req,res) =>
    res.render("hearthstone",{
      title: "Hearthstone",
      description: "Hearthstone description",
      stylesheet: "hearthstone"
    })
  );

  app.get("/arknight",(req, res) =>
    res.render("arknight",{
      title: "Arknight",
      description: "Arknight description",
      stylesheet: "arknight"
    })
  );

  app.get("/paladins",(req, res) =>
    res.render("paladins",{
      title: "Paladins",
      description: "Paladins description",
      stylesheet: "paladins"
    })
  );

  app.get("/inside",(req, res) =>
    res.render("inside",{
      title: "Inside",
      description: "Inside description",
      stylesheet: "inside"
    })
  );

  app.get("/limbo",(req, res) =>
    res.render("limbo",{
      title: "Limbo",
      description: "Limbo description",
      stylesheet: "limbo"
    })
  );

  app.get("/60_Seconds",(req, res) =>
    res.render("60_Seconds",{
      title: "60 Seconds",
      description:"60 Seconds description",
      stylesheet:"60_Seconds"
    })
  );

  app.get("/homeAndroid",(req, res) =>
    res.render("homeAndroid",{
      title:"Game.you",
      description:"Home Android description",
      stylesheet:"homeAndroid"
    })
  );

  app.get("/video",(req, res) =>
    res.render("video",{
      title:"Game.you",
      description:"Video description",
      stylesheet:"video"
    })
  );

  app.get("/help",(req, res) =>
    res.render("help",{
      title:"Game.you",
      description:"Help description",
      stylesheet:"help"
    })
  )
}