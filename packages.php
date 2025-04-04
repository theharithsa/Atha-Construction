<?php

$title = 'House Planners in Bangalore | Atha Construction Packages';
$description = 'Discover expert house planners in Bangalore with Atha Construction Packages. Tailored designs, quality construction, and affordable pricing. Visit us now!';
$keywords = 'Atha Construction Packages, house planners in bangalore, home architecture design';
$h1 = "Solid Presence, Built to Last";

include 'header.php';
?>

<section class="sec-banner">
    <div class="bnr-img">
        <img src="./assetes/images//properties/banner.png" class="w-100" alt="Home Construction In Bangalore" title="Home Construction In Bangalore">

        <div class="bg-bnr-layer">

        </div>

        <div class="baner-cont-abs1 d-lg-block d-none">
            
            <h1><?php echo $h1; ?></h1>

        </div>

    </div>
</section>

<section class="sec pck-sec text-center py-5" id="next-section">
    <div class="pck-sec-2">
        <div class="container">
            <h2 class="mn-hed">
                PACKAGES
            </h2>

            <p class="cm-fnt">
                Quality, Value and Service have been our hallmarks. Our packages follow the same philosophy where care is taken to ensure customization without compromising on quality. Home construction is easy with us. We have it all!
            </p>

            <div class="containers">
                <div class="row">
                    <div class="col-lg-6">
                        <img src="./assetes/images/properties/container-1.png" class="w-100 cont-1" alt="Atha Construction Packages" title="Atha Construction Packages" onclick="showModel()">
                    </div>
                    
                    <div class="col-lg-6 mt-4 mt-lg-0">
                        <img src="./assetes/images/properties/container-2.png" class="w-100 cont-2" alt="Construction Companies In Bangalore"
                            onclick="showModel1()" title="Construction Companies In Bangalore">
                    </div>
                </div>
            </div>

        </div>
    </div>


</section>







<!-- <button>Show Popup</button> -->

<div id="overlay"></div>
<div id="popUp">
    <div class="pop-upcont text-light p-5">
        <button onclick="closeModel()" class="close-btn">
            <span>
                X
            </span>
        </button>
        <div class="row d-flex align-items-center justify-content-center">
            <div class="col-lg-4 bud-con">
                <p class="pop-budNa mb-0">
                    BUDGET PACKAGE
                </p>
                <p class="pop-pric mb-0">
                    ₹2799
                </p>
               
            </div>


            <div class="col-lg-4">
                <ul class="ser-ul">
                    <li>Design & Drawings</li>
                    <li>Core Construction Materials</li>
                    <li>Architecture Detailing</li>
                    <li>Flooring & Wall Tiling</li>
                    <li>Painting</li>
                    <li>Electricals</li>
                    <li>Plumbing</li>
                    <li>Doors</li>
                    <li>Windows</li>
                    <li>Kitchen & Bathroom Fixtures</li>
                    <li>Fabrication Works</li>
                    <li>Warranty Period</li>
                    <li> Extra Charges </li>
                </ul>
            </div>


            <div class="col-lg-4">
                <button class="pop-btn d-block mx-auto">
                  <a href="contact.php" class="text-dark" style="text-decoration:none;">  Enquire Now</a>
                </button>
            </div>

        </div>
    </div>

</div>

<!-- popup 2 -->

<div id="overlay1"></div>
<div id="popUp1">
    <div class="pop-upcont text-light p-lg-5">
        <button onclick="closeModel1()" class="close-btn">
            <span>
                X
            </span>
        </button>
        <div class="row d-flex align-items-center justify-content-center">
           
            <p class="pop-budNa mb-0 text-center fs-4 mb-4">
                    CUSTOMIZE YOUR PACKAGE
                </p>



            <div class="col-lg-6 ">
            <form role="form" name="form1" method="post" id="footer-popup">

                <div id="footer-note"></div>

                                <div class="nam-mob">
                                    <div class="mb-2 inp-inner">

                                        <input type="text" name="name" class="ps-0 form-control" placeholder="Enter Your Name" required="">

                                    </div>
                                    <div class="mb-2 inp-inner">

                                        <div class="input-group">

                                            <input type="tel" name="phone" placeholder="Phone No." class="form-control ps-0" value="" required="">

                                        </div>

                                    </div>


                                </div>
                                <div class="mb-2">

                                    <input type="email" name="email" class="form-control ps-0" placeholder="Enter email">

                                </div>

                                <div class="mb-2 pt-3">
                                    <label for="type" class="typ-lab">What kind of construction are you looking for ?</label>
                                        <select name="type" class=" w-100 text-white drp-dwn pt-2" id="type">
                                            <option  class="text-dark drp-dwn" value="residential">Residential</option>
                                            <option  class="text-dark drp-dwn" value="commercial">Commercial</option>
                                            
                                        </select>

                                </div>

                                <div class="mb-2 inp-inner">

                                    <input type="text" name="plotsize" class="ps-0 form-control" placeholder="Plot size ?" required="">

                                </div>


                                <input type="submit" id="footer-btn" name="Submit" class="btn footer-sub mt-3" value="Submit">

                </form>


            </div>

        </div>
    </div>

</div>



<!-- popup 3-->

<div id="overlay2"></div>
<div id="popUp2">
    <div class="pop-upcont text-light p-5">
        <button onclick="closeModel2()" class="close-btn">
            <span>
                X
            </span>
        </button>
        <div class="row d-flex align-items-center justify-content-center">
            <div class="col-lg-4 bud-con">
                <p class="pop-budNa mb-0">
                LUXURY PACKAGE
                </p>
                <p class="pop-pric mb-0">
                ₹2450
                </p>
                <p class="inc-tx mb-0">
                    Inclusive of Tax
                    Save $30
                </p>
            </div>


            <div class="col-lg-4">
                <ul class="ser-ul">
                    <li>Design & Drawings</li>
                    <li>Core Construction Materials</li>
                    <li>Architecture Detailing</li>
                    <li>Flooring & Wall Tiling</li>
                    <li>Painting</li>
                    <li>Electricals</li>
                    <li>Plumbing</li>
                    <li>Doors</li>
                    <li>Windows</li>
                    <li>Kitchen & Bathroom Fixtures</li>
                    <li>Fabrication Works</li>
                    <li>Warranty Period</li>
                    <li> Extra Charges </li>
                </ul>
            </div>


            <div class="col-lg-4">
                <button class="pop-btn d-block mx-auto">
                    Select
                </button>
            </div>

        </div>
    </div>

</div>






<?php
include 'footer.php';
?>