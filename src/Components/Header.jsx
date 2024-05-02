import { Mainimages,Mainimage2,Mainimage3 } from "./Images/Image.jsx";
let Header=()=>{
    return (
        <div id="header" className="ml-20 mr-20 ">
            <h1 className=" text-3xl text-pink-700 ">Family Wellness</h1>
            
            <p className="mt-2">MASSAGE THERAPY</p>
            <br />
            <div id="navitems">
                <ul className="flex justify-between bg-slate-400 text-lg font-bold  pr-20 h-8">
                    <li className="bg-pink-700 w-48 bg-content"><span className="ml-16">Home</span></li>
                    <li>About</li>
                    <li>Beardo</li>
                    <li>FAQ</li>
                    <li>CONTACT</li>
                </ul>
            </div>
            <br />
         <img src={Mainimage3} alt=""  className="w-full h-2/4"/>

        </div>
    )
}
export default Header;