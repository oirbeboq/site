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
                   <p className ="desc-container"> Randy Addaé Manu is a Ghanaian-American Visual Development Artist based in
                        New York City with over 5+ years of experience across animation and video games.
                        <br />
                        <br />
                        He specialize in juicing early creative ideas into cohesive visual worlds, bringing to life character concepts,
                        and assisting in pitch development through strong visual direction.
                        <br />
                        <br />

                        Currently open to freelance, contract, and consulting opportunities 
                        in Art Direction, Animation, Visual Development, as well as Pitch Development!
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