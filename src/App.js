import './App.css';
import { FaRegEnvelope,FaShoppingBasket } from "react-icons/fa";
import { IoLocationOutline,IoSearchOutline,IoReorderThreeOutline,IoPlayOutline } from "react-icons/io5";
// import { FiPhone } from "react-icons/fi";
import { MdOutlinePhoneEnabled } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { LiaEnvelopeOpenTextSolid } from "react-icons/lia";
import { FaGoogle,FaFacebookF,FaTwitter,FaLinkedinIn,FaAngleLeft,FaAngleRight,FaCheck,FaStar,FaInstagram } from "react-icons/fa6";

function App() {
  return (
    <section className="App">
        <header>
        <div className="bgBlack">
            <div className="container">
                <div className="top_header">
                    <div className="info">
                      <div className='info1'>
                        <i><FaRegEnvelope></FaRegEnvelope></i>
                        <a href="#" className="txtWhite">info@website.com</a>
                      </div>
                      <div className='info1'>
                        <i><IoLocationOutline ></IoLocationOutline></i>
                        <a href="#" className="txtWhite">Oakwood, Los Angeles, CA 1098</a>
                      </div>
                    </div>
                    <div className="social_i">
                        <a href="#"><i><FaFacebookF></FaFacebookF></i></a>
                        <a href="#"><i><FaTwitter></FaTwitter></i></a>
                        <a href="#"><i><FaLinkedinIn></FaLinkedinIn></i></a>
                        <a href="#"><i><FaGoogle></FaGoogle></i></a>
                    </div>
                </div>
            </div>
        </div>

        {/* ********************************************************
                          Logo Header
        **********************************************************/}

        <div className="bgcolor">
            <div className="container">
                <div className="logo_header">
                    <div className="logo_img">
                        <img src={require(`./image/logo.png`)}></img>
                    </div>
                    <div className="nav">
                        <ul className="top_nav">
                            <li className="middle_info">
                                <i><MdOutlinePhoneEnabled></MdOutlinePhoneEnabled></i>
                                <div class="top_nav_info">
                                    <p>Our Address</p>
                                    <p><b>Drive Chicago IL</b></p>
                                </div>
                            </li>
                            <li class="middle_info">
                                <i><IoLocationOutline></IoLocationOutline></i>
                                <div class="top_nav_info">
                                    <p>Call Us</p>
                                    <p><b>224-359-5495</b></p>
                                </div>
                            </li>
                            <a href="#" class="btn-info sigma_btn">GET A QUOTE</a>
                        </ul>
                    </div>
                </div>
            </div>
        </div>


        {/* ****************************************************************
                            Navbar
        *******************************************************************/}

        <div class="container">
            <div class="row_header">
                <div class="bottom_header">
                    <nav class="navbar">
                        <div class="container-fluid mx-0">
                            
                            <div class="collapse">
                                <ul class="navbar-nav main_menu">
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Home pages</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">pages</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">shop</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">blog</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">contact us</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                <div class="col-auto ms-auto mt-3">
                    <ul class="buckets">
                        <li>
                            <a href="#" class="control_search">
                                <i><IoSearchOutline></IoSearchOutline></i>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="control_search">
                                <i><FaShoppingBasket></FaShoppingBasket></i>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="control_search">
                                <i><FiMenu></FiMenu></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    </header>

    <main>
        <div className='banner'>
            <img src={require(`./image/banner1.jpeg`)}></img>  
            <div className="slider_content text-center w-100 txtWhite ">                                                                                                                                                                                                          <div className="content">
                    <p className="mb-2 slider_tlt">Pure water is the base of health</p>
                    <p className="display-2 bc">Water</p>
                    <p className="display-2 bc">For Everyone</p>
                    <div className="banner_links d-flex align-items-center justify-content-center">
                        <a href="#" class="sima_btn1 btn btn-info mx-3">VIEW SHOP +</a>
                        <a href="#" class="sima_btn btn btn-light mx-3">READ MORE +</a>
                    </div>
                </div>
            </div> 
            
        </div>
        <div class="main">
	        <i className='prev'><FaAngleLeft></FaAngleLeft></i>
	        <i className='prev'><FaAngleRight></FaAngleRight></i>
        </div>
    </main>

    {/* ************************************************************
                        Form
    ************************************************************** */}

    <div className='container'>
        <div className='banner_info'>
            <form>
                <div className='form_row'>
                    <div className='form_col'>
                        <div className='form_left'>
                            <label>Search Water Bottle Product</label>
                            <input type="text" class="topic_field" name="fname" placeholder="Search Any Product"></input>
                        </div>
                    </div>
                    <div className='form_col'>
                        <div className='form_left'>
                        <label class="">Category</label>
                            <div class="input-group">
                                <select name="" id="" class="bg-transparent">
                                    <option value="1" selected>Select Category</option>
                                    <option value="2">Category 2</option>
                                    <option value="3">Category 3</option>
                                    <option value="4">Category 4</option>
                                </select>
                                <div class="input-group-append">
                                    <button class="button">
                                    <i class="fa-solid fa-magnifying-glass"></i>
                                        SEARCH
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>

    {/* **********************************************************
                    About Us
    **********************************************************/}
    
    <div class="spacer">
            <div class="container">
                <div class="about_row">
                    <div class="about">
                        <div class="sigma_about">
                            <div class="sigma_about_img_1">
                                <img src={require(`./image/a1.jpeg`)} alt=""></img>
                            </div>
                            <div class="sigma_about_img_2">
                                <img src={require(`./image/a2.jpeg`)} alt=""></img>
                            </div>
                            <span class="sigma_about-exp">
                                <span class="bgBlue">25 </span>
                                Years of<br/> Experiences
                            </span>
                            <a href="https://www.youtube.com/watch?v=KH1pcNUTa6U" target="_blank" class="sigma_vedio popup-vedio">
                                <i><IoPlayOutline></IoPlayOutline></i>
                            </a>
                        </div>
                    </div>
                    <div class="about">
                        <div class="sigma_about">
                            <div class="section_title">
                                <p class="subtitle">About us</p>
                                <h3 class="title">Join Our, <span class="bgBlue">Water Club</span></h3>
                                <h4 class="tlt">Watbot doing something a little different? The Easiest & Cost Effective</h4>
                            </div>
                            <div class="sigma_about_content">
                                <p class="cnt m-0">A water bottle is a container that is used to hold water, liquids or other beverages for consumption. The use of a water bottle allows an individual to drink and transport a beverage from one place to another.</p>
                                <div class="sigma_general_list">
                                    <ul className='list_left'>
                                        <li>
                                            <i><FaCheck></FaCheck></i>
                                            <span>Protection from Bacteria</span>
                                        </li>
                                        <li>
                                            <i><FaCheck></FaCheck></i>
                                            <span>Protection from Bacteria</span>
                                        </li>
                                        <li>
                                            <i><FaCheck></FaCheck></i>
                                            <span>Protection from Bacteria</span>
                                        </li>
                                    </ul>
                                    <ul class="list_right">
                                        <li>
                                            <i><FaCheck></FaCheck></i>
                                            <span>Protection from Bacteria</span>
                                        </li>
                                        <li>
                                            <i><FaCheck></FaCheck></i>
                                            <span>Protection from Bacteria</span>
                                        </li>
                                        <li>
                                            <i><FaCheck></FaCheck></i>
                                            <span>Protection from Bacteria</span>
                                        </li>
                                    </ul>
                                </div>
                                <a href="#" class="btn btn-info siga_btn txtWhite">CONTACT US</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        {/* ***********************************************************
                            Choose Us
        *****************************************************************/}

        <div class="spacer">
            <div class="container">
                <div class="choose_row">
                    <div class="choose1">
                        <div class="sigma_about">
                            <div class="sigma_about_img-1">
                                <img src={require(`./image/c1.jpeg`)} alt=""></img>
                                <a href="https://www.youtube.com/watch?v=KH1pcNUTa6U" target="_blank" class="popup-vedio choose">
                                <i><IoPlayOutline></IoPlayOutline></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="choose2">
                        <div class="sigma_about">
                            <div class="section_title">
                                <p class="subtitle mb-4">Why Choose Us</p>
                                <h3 class="title mb-4">Water Purified by Nature <span class="bgBlue">and Love</span></h3>
                            </div>
                            <div class="sigma_about_content">
                                <p class="cnt m-0 mb-4">This theme is great and easy to use. It has a beautiful layout and the customer service is fabulous. There is no other theme that looks this great. If you are nervous about installing, I would highly recommend buy the Extended Customer Service package. This theme is good for beginners and advanced.</p>
                                <a href="#" class="btn btn-info siga_btn txtWhite">LEARN MORE</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        {/* *******************************************************
                        Our category
        **********************************************************/}

<div class="spacer">
            <div class="container">
                <div class="section_title category_title">
                    <p class="subtitle">Category</p>
                    <h3 class="title">Our Category</h3>
                </div>
            </div>
            <div class="category_row">
                <div class="category">
                    <div class="sigma_category">
                        <a href="#">
                            <img src={require(`./image/asset 9.jpeg`)} alt="" width="100%"></img>
                        </a>
                        <div class="sigma_category_content">
                            <span>1 L Spring Water in Glass</span>
                        </div>
                    </div>
                </div>
                <div class="category">
                    <div class="sigma_category">
                        <a href="#">
                            <img src={require(`./image/asset 10.jpeg`)} alt="" width="100%"></img>
                        </a>
                        <div class="sigma_category_content">
                            <span>1 L Spring Water in Glass</span>
                        </div>
                    </div>
                </div>
                <div class="category">
                    <div class="sigma_category">
                        <a href="#">
                            <img src={require(`./image/asset 11.jpeg`)} alt="" width="100%"></img>
                        </a>
                        <div class="sigma_category_content">
                            <span>1 L Spring Water in Glass</span>
                        </div>
                    </div>
                </div>
                <div class="category">
                    <div class="sigma_category">
                        <a href="#">
                            <img src={require(`./image/asset 12.jpeg`)} alt="" width="100%"></img>
                        </a>
                        <div class="sigma_category_content">
                            <span>1 L Spring Water in Glass</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        {/* *************************************************
                        Our Product
        **********************************************************/}

        <div class="container">
            <div class="section_title category_title">
                <p class="subtitle mb-2">Trending</p>
                <h3 class="title">Our Products</h3>
            </div>
            <div class="product_row mt-5">
                <div class="product">
                    <div class="sigma_product">
                        <div class="sigma_product_thumb">
                            <a href="#">
                                <img src={require(`./image/asset 13.jpeg`)} alt="" width="100%" className='p_img'></img>
                                <div class="sigma_product_gallery">
                                    <img src={require(`./image/asset 14.jpeg`)} alt=""></img>
                                    <img src={require(`./image/asset 15.jpeg`)} alt=""></img>
                                    <img src={require(`./image/asset 16.jpeg`)} alt=""></img>
                                </div>
                            </a>
                            <div class="sigma_product_controls">
                                <a href="#">
                                    <i class="fa-regular fa-heart"></i>
                                </a>
                                <a href="#">
                                    <i class="fa-regular fa-eye"></i>
                                </a>
                            </div>
                        </div>
                        <div class="sigma_product_body">
                            <div class="sigma_product_title">
                                <a href="#">Natural Water Bottle</a>
                            </div>
                            <div class="sigma_product_price">
                                <span class="bgBlue">29$</span>
                                <span class="p49">49$</span>
                            </div>
                            <div class="sigma_rating">
                                <i><FaStar></FaStar></i>
                                <i><FaStar></FaStar></i>
                                <i><FaStar></FaStar></i>
                                <i><FaStar></FaStar></i>
                                <i><FaStar></FaStar></i>
                            </div>
                            <p>A water bottle is a container that is used to hold water, liquids or other beverages for consumption.</p>
                            <a href="#" class="btn btn-info add_cart txtWhite">ADD TO CART</a>
                        </div>
                    </div>
                </div>
                <div class="product">
                    <div class="sigma_product">
                        <div class="sigma_product_thumb">
                            <a href="#">
                                <img src={require(`./image/asset 17.jpeg`)} alt="" width="100%" className='p_img'></img>
                                <div class="sigma_product_gallery">
                                    <img src={require(`./image/asset 18.jpeg`)} alt=""></img>
                                    <img src={require(`./image/asset 19.jpeg`)} alt=""></img>
                                    <img src={require(`./image/asset 20.jpeg`)} alt=""></img>
                                </div>
                            </a>
                            <div class="sigma_product_controls">
                                <a href="#">
                                    <i class="fa-regular fa-heart"></i>
                                </a>
                                <a href="#">
                                    <i class="fa-regular fa-eye"></i>
                                </a>
                            </div>
                        </div>
                        <div class="sigma_product_body">
                            <div class="sigma_product_title">
                                <a href="#">Natural Water Bottle</a>
                            </div>
                            <div class="sigma_product_price">
                                <span class="bgBlue">29$</span>
                                <span class="p49">49$</span>
                            </div>
                            <div class="sigma_rating">
                                <i><FaStar></FaStar></i>
                                <i><FaStar></FaStar></i>
                                <i><FaStar></FaStar></i>
                                <i><FaStar></FaStar></i>
                                <i><FaStar></FaStar></i>
                            </div>
                            <p>A water bottle is a container that is used to hold water, liquids or other beverages for consumption.</p>
                            <a href="#" class="btn btn-info add_cart txtWhite">ADD TO CART</a>
                        </div>
                    </div>
                </div>
                <div class="product">
                    <div class="sigma_product">
                        <div class="sigma_product_thumb">
                            <a href="#">
                                <img src={require(`./image/asset 21.jpeg`)} alt="" width="100%" className='p_img'></img>
                                <div class="sigma_product_gallery">
                                    <img src={require(`./image/asset 22.jpeg`)} alt=""></img>
                                    <img src={require(`./image/asset 23.jpeg`)} alt=""></img>
                                    <img src={require(`./image/asset 24.jpeg`)} alt=""></img>
                                </div>
                            </a>
                            <div class="sigma_product_controls">
                                <a href="#">
                                    <i class="fa-regular fa-heart"></i>
                                </a>
                                <a href="#">
                                    <i class="fa-regular fa-eye"></i>
                                </a>
                            </div>
                        </div>
                        <div class="sigma_product_body">
                            <div class="sigma_product_title">
                                <a href="#">Natural Water Bottle</a>
                            </div>
                            <div class="sigma_product_price">
                                <span class="bgBlue">29$</span>
                                <span class="p49">49$</span>
                            </div>
                            <div class="sigma_rating">
                                <i><FaStar></FaStar></i>
                                <i><FaStar></FaStar></i>
                                <i><FaStar></FaStar></i>
                                <i><FaStar></FaStar></i>
                                <i><FaStar></FaStar></i>
                            </div>
                            <p>A water bottle is a container that is used to hold water, liquids or other beverages for consumption.</p>
                            <a href="#" class="btn btn-info add_cart txtWhite">ADD TO CART</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* ****************************************************
                            Counter
        *********************************************************/}
    <div className='spacer'>
        <div class="spacer grey">
            <div class="container">
                <div class="counter_row">
                    <div class="counter">
                        <div class="sigma_counter">
                            <div class="sigma_counter_dots">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <div class="sigma_counter_inner">
                                <span class="txtWhite"><b class="counter">40099</b></span>
                                <span class="txtWhite">+</span>
                                <p>Bottles Delivered</p>
                            </div>
                        </div>
                    </div>
                    <div class="counter">
                        <div class="sigma_counter">
                            <div class="sigma_counter_dots">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <div class="sigma_counter_inner">
                                <span class="txtWhite"><b class="counter">10090</b></span>
                                <span class="txtWhite">+</span>
                                <p>Satisfied Customer</p>
                            </div>
                        </div>
                    </div>
                    <div class="counter">
                        <div class="sigma_counter">
                            <div class="sigma_counter_dots">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <div class="sigma_counter_inner">
                                <span class="txtWhite"><b class="counter">499</b></span>
                                <span class="txtWhite">+</span>
                                <p>Purity to the Max</p>
                            </div>
                        </div>
                    </div>
                    <div class="counter">
                        <div class="sigma_counter">
                            <div class="sigma_counter_dots">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <div class="sigma_counter_inner">
                                <span class="txtWhite"><b class="counter">499</b></span>
                                <span class="txtWhite">+</span>
                                <p>Quality Water Standard</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {/* ************************************************************
                            Features
    ***********************************************************/}

<div class="spacer">
            <div class="container">
                <div class="section_title category_title">
                    <p class="subtitle mb-2">Featured</p>
                    <h3 class="title">Featured Products</h3>
                </div>
                <div class="features_row">
                    <div class="features">
                        <div class="sigma_product sigma_product1">            
                            <div class="sigma_product_thumb">
                                <a href="#">
                                    <img src={require(`./image/asset 25.jpeg`)} alt="" width="100%"></img>
                                </a>
                            </div>
                            <div class="sigma_product_body">
                                <div class="sigma_rating">
                                    <i><FaStar></FaStar></i>
                                    <i><FaStar></FaStar></i>
                                    <i><FaStar></FaStar></i>
                                    <i><FaStar></FaStar></i>
                                    <i><FaStar></FaStar></i>
                                </div>
                                <h5 class="sigma_product_title">1 L Spring Water in Glass</h5>
                                <p>A water bottle is a container that is used to hold water, liquids or other beverages for consumption. The use of a water bottle allows an individual to drink and transport.</p>
                                <div class="sigma_product_footer">
                                    <div class="sigma_product_price">
                                        <span class="bgBlue">29$</span>
                                        <span class="pp">49$</span>
                                    </div>
                                    <a href="#" class="btn btn-info add_cart txtWhite">ADD TO CART</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="features">
                        <div class="sigma_product sigma_product1">            
                            <div class="sigma_product_thumb">
                                <a href="#">
                                    <img src={require(`./image/asset 26.jpeg`)} alt="" width="100%"></img>
                                </a>
                            </div>
                            <div class="sigma_product_body">
                                <div class="sigma_rating">
                                    <i><FaStar></FaStar></i>
                                    <i><FaStar></FaStar></i>
                                    <i><FaStar></FaStar></i>
                                    <i><FaStar></FaStar></i>
                                    <i><FaStar></FaStar></i>
                                </div>
                                <h5 class="sigma_product_title">1 L Spring Water in Glass</h5>
                                <p>A water bottle is a container that is used to hold water, liquids or other beverages for consumption. The use of a water bottle allows an individual to drink and transport.</p>
                                <div class="sigma_product_footer d-flex justify-content-between">
                                    <div class="sigma_product_price">
                                        <span class="bgBlue">29$</span>
                                        <span class="pp">49$</span>
                                    </div>
                                    <a href="#" class="btn btn-info add_cart txtWhite">ADD TO CART</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="features_row">
                    <div class="features">
                        <div class="sigma_product sigma_product1">            
                            <div class="sigma_product_thumb">
                                <a href="#">
                                    <img src={require(`./image/asset 27.jpeg`)} alt="" width="100%"></img>
                                </a>
                            </div>
                            <div class="sigma_product_body">
                                <div class="sigma_rating">
                                    <i><FaStar></FaStar></i>
                                    <i><FaStar></FaStar></i>
                                    <i><FaStar></FaStar></i>
                                    <i><FaStar></FaStar></i>
                                    <i><FaStar></FaStar></i>
                                </div>
                                <h5 class="sigma_product_title">1 L Spring Water in Glass</h5>
                                <p>A water bottle is a container that is used to hold water, liquids or other beverages for consumption. The use of a water bottle allows an individual to drink and transport.</p>
                                <div class="sigma_product_footer ">
                                    <div class="sigma_product_price">
                                        <span class="bgBlue">29$</span>
                                        <span class="pp">49$</span>
                                    </div>
                                    <a href="#" class="btn btn-info add_cart txtWhite">ADD TO CART</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="features">
                        <div class="sigma_product sigma_product1">            
                            <div class="sigma_product_thumb">
                                <a href="#">
                                    <img src={require(`./image/asset 28.jpeg`)} alt="" width="100%"></img>
                                </a>
                            </div>
                            <div class="sigma_product_body">
                                <div class="sigma_rating">
                                    <i><FaStar></FaStar></i>
                                    <i><FaStar></FaStar></i>
                                    <i><FaStar></FaStar></i>
                                    <i><FaStar></FaStar></i>
                                    <i><FaStar></FaStar></i>
                                </div>
                                <h5 class="sigma_product_title">1 L Spring Water in Glass</h5>
                                <p>A water bottle is a container that is used to hold water, liquids or other beverages for consumption. The use of a water bottle allows an individual to drink and transport.</p>
                                <div class="sigma_product_footer d-flex justify-content-between">
                                    <div class="sigma_product_price">
                                        <span class="bgBlue">29$</span>
                                        <span class="pp">49$</span>
                                    </div>
                                    <a href="#" class="btn btn-info add_cart txtWhite">ADD TO CART</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* ********************************************************
                            Creative team
        **********************************************************/}

<div class="spacer">
            <div class="container">
                <div class="section_title category_title">
                    <p class="subtitle mb-2">Meet Our Team</p>
                    <h3 class="title">Creative Team</h3>
                </div>
                <div class="team_row">
                    <div class="team">
                        <div class="sigma_team">
                            <div class="sigma_team_thumb has-width">
                                <a href="#">
                                    <img src={require(`./image/asset 29.jpeg`)} alt="" class="rounded-circle"></img>
                                </a>
                            </div>
                            <div class="sigma_team_body">
                                <h5>
                                    <a href="#">Tim Abell</a>
                                </h5>
                                <div class="sigma_team_categories mt-3">
                                    <a href="#" class="sigma_team_category">CEO</a>
                                </div>
                                <p class="mt-3">A water bottle or bottlecan, is usually made of plastic, glass, or metal. Water bottles are available in different shapes, colors, and sizes. In the past, water.</p>
                                <ul class="sigma_social_icons">
                                    <li>
                                        <a href="#"><i><FaFacebookF></FaFacebookF></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i><FaTwitter></FaTwitter></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i><FaInstagram></FaInstagram></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="team">
                        <div class="sigma_team">
                            <div class="sigma_team_thumb has-width">
                                <a href="#">
                                    <img src={require(`./image/asset 30.jpeg`)} alt="" class="rounded-circle"></img>
                                </a>
                            </div>
                            <div class="sigma_team_body">
                                <h5>
                                    <a href="#">Tom Hardy</a>
                                </h5>
                                <div class="sigma_team_categories mt-3">
                                    <a href="#" class="sigma_team_category">Manager</a>
                                </div>
                                <p class="mt-3">A water bottle or bottlecan, is usually made of plastic, glass, or metal. Water bottles are available in different shapes, colors, and sizes. In the past, water.</p>
                                <ul class="sigma_social_icons">
                                    <li>
                                        <a href="#"><i><FaFacebookF></FaFacebookF></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i><FaTwitter></FaTwitter></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i><FaInstagram></FaInstagram></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="team">
                        <div class="sigma_team">
                            <div class="sigma_team_thumb has-width">
                                <a href="#">
                                    <img src={require(`./image/asset 31.jpeg`)} alt="" class="rounded-circle"></img>
                                </a>
                            </div>
                            <div class="sigma_team_body">
                                <h5>
                                    <a href="#">Maria Henry</a>
                                </h5>
                                <div class="sigma_team_categories mt-3">
                                    <a href="#" class="sigma_team_category">Marketing Executive</a>
                                </div>
                                <p class="mt-3">A water bottle or bottlecan, is usually made of plastic, glass, or metal. Water bottles are available in different shapes, colors, and sizes. In the past, water.</p>
                                <ul class="sigma_social_icons">
                                    <li>
                                        <a href="#"><i><FaFacebookF></FaFacebookF></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i><FaTwitter></FaTwitter></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i><FaInstagram></FaInstagram></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* ***************************************************
                            Blog
        *********************************************************/}

    <div class=" ">
        <div class="container">
            <div class="section_title category_title">
                <p class="subtitle mb-2">Trigal Water Bottle Feeds</p>
                <h3 class="title">Our Blog</h3>
            </div>
            <div class="blog">
                <div class="blog1">
                    <div class="blog_post">
                        <div class="blog_media">
                            <img src={require(`./image/blog1.jpeg`)} alt=""></img>
                            <div class="post_date">
                                <a href="#"><span>24</span>June</a>
                            </div>
                        </div>
                        <div class="blog_contain">
                            <div className="post_head">
                                <ul>
                                    <li>
                                        <a href='#' className='first'>BY <b>ADMIN</b></a>
                                    </li>
                                    <li>
                                        <a href='#' className='first'>|</a>
                                    </li>
                                    <li>
                                        <a href='#'>WATER BOTTLE</a>
                                    </li>
                                </ul>
                            </div>
                            <div className='blog_content'>
                                <h5>The Secrets of Modern Spring Water Bottle.</h5>
                                <p>Sales of single-use, pre-filled plastic water bottles have increased almost every single year.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="blog1">
                    <div class="blog_post">
                        <div class="blog_media">
                            <img src={require(`./image/blog2.jpeg`)} alt=""></img>
                            <div class="post_date">
                                <a href="#"><span>22</span>April</a>
                            </div>
                        </div>
                        <div class="blog_contain">
                            <div className="post_head">
                                <ul>
                                    <li>
                                        <a href='#' className='first'>BY <b>ADMIN</b></a>
                                    </li>
                                    <li>
                                        <a href='#' className='first'>|</a>
                                    </li>
                                    <li>
                                        <a href='#'>WATER BOTTLE</a>
                                    </li>
                                </ul>
                            </div>
                            <div className='blog_content'>
                                <h5>The Secrets of Modern Spring Water Bottle.</h5>
                                <p>Sales of single-use, pre-filled plastic water bottles have increased almost every single year.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="blog1">
                    <div class="blog_post">
                        <div class="blog_media">
                            <img src={require(`./image/blog3.jpeg`)} alt=""></img>
                            <div class="post_date">
                                <a href="#"><span>12</span>Jan</a>
                            </div>
                        </div>
                        <div class="blog_contain">
                            <div className="post_head">
                                <ul>
                                    <li>
                                        <a href='#' className='first'>BY <b>ADMIN</b></a>
                                    </li>
                                    <li>
                                        <a href='#' className='first'>|</a>
                                    </li>
                                    <li>
                                        <a href='#'>WATER BOTTLE</a>
                                    </li>
                                </ul>
                            </div>
                            <div className='blog_content'>
                                <h5>The Secrets of Modern Spring Water Bottle.</h5>
                                <p>Sales of single-use, pre-filled plastic water bottles have increased almost every single year.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {/* ***********************************************
                    Section
    **************************************************/}

    <div className='spacer'>
        <div className='container'>
            <div className='sigma_info'>
                <div className='sec1'>
                    <div className='sigma_info_title'>
                        <span>
                            <i><IoLocationOutline></IoLocationOutline></i>
                        </span>
                    </div>
                    <div className='sigma_info_des'>
                        <p>2416 Mapleview Drive</p>
                        <p>Tampa, FL 33634</p>  
                    </div>
                </div>
                <div className='sec1 border'>
                    <div className='sigma_info_title'>
                        <span>
                            <i><LiaEnvelopeOpenTextSolid></LiaEnvelopeOpenTextSolid></i>
                        </span>
                    </div>
                    <div className='sigma_info_des'>
                        <p>2416 Mapleview Drive</p>
                        <p>Tampa, FL 33634</p>  
                    </div>
                </div>
                <div className='sec1 border'>
                    <div className='sigma_info_title'>
                        <span>
                            <i><MdOutlinePhoneEnabled></MdOutlinePhoneEnabled></i>
                        </span>
                    </div>
                    <div className='sigma_info_des'>
                        <p>2416 Mapleview Drive</p>
                        <p>Tampa, FL 33634</p>  
                    </div>
                </div>
            </div>
        </div>
    </div>

    <footer>
        <div className=''>
            <div className='container'>
                <div className='footer_start'>
                    <div className='logo_row'>
                        <div className='footer_logo'>
                            <img src={require(`./image/logo.png`)}></img>
                        </div>
                    </div>
                    <div className='footer_row2'>
                        <div className='footer_cnt'>
                            <p>A water bottle is a container that is used to hold water, liquids or other beverages for consumption.</p>
                            <ul class="sigma_social_icons footer_icons">
                                    <li>
                                        <a href="#"><i><FaFacebookF></FaFacebookF></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i><FaTwitter></FaTwitter></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i><FaInstagram></FaInstagram></i></a>
                                    </li>
                                </ul>
                        </div>
                        <div className='footer_menu'>
                            <ul>
                                <li><a href='#'>Ecommerce</a></li>
                                <li><a href='#'>Checkout</a></li>
                                <li><a href='#'>Wishlist</a></li>
                                <li><a href='#'>Account</a></li>
                            </ul>
                        </div>
                        <div className='footer_menu'>
                            <ul>
                                <li><a href='#'>Home</a></li>
                                <li><a href='#'>About</a></li>
                                <li><a href='#'>Blog</a></li>
                                <li><a href='#'>Contact</a></li>
                            </ul>
                        </div>
                        <div className='footer_menu'>
                            <ul>
                                <li><a href='#'>Login</a></li>
                                <li><a href='#'>Signup</a></li>
                                <li><a href='#'>Help</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='container'>
            <div className='footer_bottom'>
                <div className='copyright'>
                    <p>© Watbot -</p><b> 2022</b>
                </div>
                <div className='payment_card'>
                    <img src={require(`./image/footer.png`)}></img>
                </div>
            </div>
        </div>
    </footer>

    </section>
  );
}

export default App;
