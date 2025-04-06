<?php

$title = 'Contact|Atha construction in  Bangalore | Get in touch with Us';
$description = 'Atha Construction is a leading construction company in Bangalore. Get in touch with Atha Construction for quality, reliable, and innovative building solutions today!';
$keywords = 'Construction Company In Ballari';
$h1 = "";

include 'header.php';
?>

<section class="sec-banner">
    <div class="bnr-img">
        <img src="./assetes/images/contact-us.jpg" class="w-100" alt="Best Construction Companies in Bangalore" title="Best Construction Companies in Bangalore">

        <div class="bg-bnr-layer">

        </div>

        <div class="baner-cont-abs1 d-lg-block d-none">
            <h1>
               Contact
            </h1>
            

        </div>


    </div>
</section>

<section class="sec bg-dark text-center text-white" id="next-section">

    <div class=" py-5">
        <div class="container">

            <h2 class="mn-hed">
                Contact Us
            </h2>




            <div class="form-cont pt-4">

                <form role="form" name="form1" method="post" id="footer-form">

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

                   
                            <div class="mb-2 pt-3 text-start">
                                <label for="type" class="typ-lab ">What kind of construction are you looking for ?</label>
                                    <select name="type" class=" w-100 text-white drp-dwn pt-2" id="type">
                                        <option  class="text-dark drp-dwn" value="residential">Residential</option>
                                        <option  class="text-dark drp-dwn" value="commercial">Commercial</option>
                                        
                                    </select>

                            </div>

                            <div class="mb-2 inp-inner">

                                <input type="text" name="plotsize" class="ps-0 form-control" placeholder="Plot size ?" required="">

                            </div>



                    <input type="submit" id="footer-btn" name="Submit" class="btn footer-sub " value="Submit">

                </form>

            </div>
        </div>
    </div>
</section>





<?php
include 'footer.php';
?>