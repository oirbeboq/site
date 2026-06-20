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
                   <p>my name is animation and i make randy make games.</p>
                   <p className ="desc-container"> Randy Addaé Manu is a Ghanaian-American viusal development artist based in
                        New York City. He specializes in game design,
                        character design, & animation 
                        <br />
                        <br />
                        In his work lives a design philosophy of sketch permanence-the idea of 
                        leaving traces of rough and drafts for a stylized look 
                    </p>

            </div>
            <div 
                className="contact-container">
                    <a href="mailto:oirbeboq@gmail.com">Email <span>[-]</span></a>
                    {/*
                    <a href="https://www.instagram.com/oirbeboq/">Instagram <span>[-]</span></a>
                    <a href="https://www.youtube.com/@byoirt">Youtube <span>[-]</span></a>
                    */}
            </div>
            <div 
                className="clients-container">
                    <h1>Selected Clients</h1>
                    <a href="https://www.instagram.com/bywin.us/">ByWin<span>[-]</span></a>
                    <a href="https://www.instagram.com/uniforumco/">Uniforum<span>[-]</span></a>
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

        

    </div>
   

  );
}