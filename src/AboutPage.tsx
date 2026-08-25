export default function AboutPage() {
  return (
    <div 
        className="aboutpage-main-container">
            <div
                className="profile-image">
                <img src="/about-page/profile.png"/>
                <p>Randy Addaé Manu</p>
            </div>
            <div 
                className="bio-container">
                   <p>my name is animation and i make randy make games</p>
                   <p className ="desc-container"> Randy Addaé Manu is a Ghanaian-American viusal development artist based in
                        New York City. He specializes in game design,
                        illustration, & animation 
                        <br />
                        <br />
                        
                    </p>

            </div>
            <div 
                className="contact-container">
                    <a href="mailto:oirbeboq@gmail.com">Email</a>
                    <a href="https://www.linkedin.com/in/randyaddaemanu/">LinkedIn</a>
                    <a href="https://www.instagram.com/oirbebop/">Instagram</a>
                    <a href="https://x.com/oirbebop">Twitter</a>
                    <a href="https://www.youtube.com/@oirbebop">Youtube</a>
                    
            </div>
            <div 
                className="clients-container">
                    <h1>Selected Clients</h1>
                    <a href="https://www.instagram.com/bywin.us/">ByWin</a>
                    <a href="https://www.instagram.com/uniforumco/">Uniforum</a>
            </div>
            <div
                className="tools-container">
                    <h1> Tools</h1>
                    <ul>
                        <li>Adobe Photoshop</li>
                        <li>Adobe After Effects</li>
                        <li>Adobe Indesign</li>
                        <li>Aseprite</li>
                        <li>Blender</li>
                        <li>Clip Studio Paint</li>
                        <li>Toon Boom Harmony</li>
                        <li>Unity</li>
                        <li>Unreal Engine</li>
                        <li>Procreate</li>
                        
                        

                        
                    </ul>
            </div>
        {/*
        <div className="self-image-container">
            <img src="/about-page/profile-img.png"/>
        </div>
        */}

    </div>
   

  );
}