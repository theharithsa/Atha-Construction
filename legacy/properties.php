<?php

$title = 'Construction Projects Bangalore | Premium Villas & Homes Portfolio Karnataka';
$description = 'Explore our premium construction projects in Bangalore - luxury villas, modern homes & commercial buildings. View completed projects across Whitefield, HSR Layout, Electronic City & Karnataka.';
$keywords = 'construction projects Bangalore, villa construction Bangalore, luxury homes Bangalore, residential projects Karnataka, construction portfolio Bangalore, completed projects Bangalore, villa builders Bangalore';
$h1 = "Premium Construction Projects Across Bangalore - Excellence in Every Build";

include 'header.php';
?>



<section class="sec-banner">
    <div class="bnr-img">
        <img src="./assetes/images/properties2/banner2.png" class="w-100" alt="residential construction companies in bangalore" title="residential construction companies in bangalore">

        <div class="bg-bnr-layer">

        </div>

        <div class="baner-cont-abs1 d-lg-block d-none">
            <h1>
                EXPLORE PROPERTIES
            </h1>
            <!-- <p class="bnr-sub-cont">
                Tomer Fridman | CA DRE# 01750717
            </p>

            <button>
                EXPLORE
            </button> -->

        </div>

        

    </div>
</section>

<!-- 
<section class="sec py-5 text-center" id="next-section">

    <div class="container">

        <h2 class="mn-hed py-4">
            ONGOING PROJECT
        </h2>

        <img src="./assetes/images/properties2/rosewood.png" class="w-100" alt="">

        <p class="prop-subhed pt-4 pb-2 mb-0">
            Rosewood Residences Beverly Hills
        </p>

        <p class="prop-cmfont pb-2">
            Louis Pasteur St 2, tel aviv, Israel
        </p>

        <p class="prop-pric pt-4">
            $59,000,000
        </p>



    </div>

</section> -->

<section class="sec py-lg-5 text-center">
    <div class="container" id="wholeCont">
        <h2 class="mn-hed py-4">PROJECTS DETAILS</h2>



        <!-- Section to display project details on click -->
        <div id="projectList1" class="row d-flex justify-content-around pt-lg-4"></div>
    </div>
</section>
<!-- 
<section class="sec in-cont">

    <div class="container py-lg-5">
        <div class="row d-flex align-items-center py-lg-5">
            <div class="col-lg-8 pe-lg-5">

                <p class="cm-fnt">
                    The world-class residence showcasing scenic views of the Mediterranean Sea. the historic glory of
                    Old Jaffa, Tel Aviv's skyline and its White City heritage situated in the most desirable location.
                    Juxtaposing old and new, history and modernity, promoting an opportunity to explore
                    that which
                    rests between the two, the space in between.


                </p>

                <p class="cm-fnt mb-0">
                    This architectural masterpiece was meticulously designed by world-renowned architect Pitsou
                    Kedem
                    with spectacular outlooks from every corner of the expansive floor plan featuring 1,500 m2
                    of the
                    living area and the additional 1000 m2 of a private rooftop terrace with a landscape garden
                    by Mohr Avidan.
                </p>


            </div>
            <div class="col-lg-4 ps-lg-5 ps-4  ov-content pt-lg-0 pt-5">


                <div class="ovr-viw pb-3">
                    <div class="w-25">
                        <img src="./assetes/images/properties2/bed.png" class="ov-img" alt="">
                    </div>

                    <div class="w-75">
                        <p class="cont22">
                            4 <br>
                            BEDS
                        </p>
                    </div>
                </div>

                <div class="ovr-viw pb-3">
                    <div class="w-25">
                        <img src="./assetes/images/properties2/bath.png" class="ov-img" alt="">
                    </div>

                    <div class="w-75">
                        <p class="cont22">
                            5 <br>
                            BATHS
                        </p>
                    </div>
                </div>


                <div class="ovr-viw pb-3">
                    <div class="w-25">
                        <img src="./assetes/images/properties2/area.png" class="ov-img" alt="">
                    </div>

                    <div class="w-75">
                        <p class="cont22">
                            1326 to 1769 Sq.Ft.
                            <br>
                            LIVING AREA
                        </p>
                    </div>
                </div>


            </div>
        </div>
    </div>

</section>
 -->

<section class="sec py-lg-5 text-center">
    <div class="container">
        <h2 class="mn-hed py-4">ONGOING PROJECTS</h2>

        <!-- Container to hold dynamically rendered project cards -->
        <div id="projectList" class="row d-flex justify-content-around pt-lg-4"></div>


    </div>
</section>



<script type="module">
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
    import { getFirestore, collection, onSnapshot } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

    // Firebase configuration
    const firebaseConfig = {
        apiKey: "AIzaSyAEpyMUKI8eH2xU7_3Ve3whYWs7dXWOrwI",
        authDomain: "atha-eb597.firebaseapp.com",
        databaseURL: "https://atha-eb597-default-rtdb.firebaseio.com",
        projectId: "atha-eb597",
        storageBucket: "atha-eb597.appspot.com",
        messagingSenderId: "793772614946",
        appId: "1:793772614946:web:45fb6b530052fbdc44b17b",
        measurementId: "G-NR4CK21TCC"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    // Function to render a single project item
    function renderProjectItem(project) {
        const projectList = document.getElementById("projectList");


        // Create a new div element for the project card
        const projectCard = document.createElement("div");
        projectCard.classList.add("col-lg-5");
        projectCard.classList.add("text-center");
        projectCard.classList.add("pb-5");

        // Add the HTML structure for the project card
        projectCard.innerHTML = `
            <a href="#wholeCont" style="color:black; text-decoration:none" >
                <div class="img-posrel">
                    <img src="${project.img_url}" class="w-100" alt="Project Image">
                   
                </div>
                <p class="proj-nm1 pt-4">${project.title}</p>
                <p class="proj-inCont">${project.locations}</p>
                <p class="proj-inCont">${project.feets}</p>
                <p class="proj-inCont"><b>Land Parcel : ${project.land1}</b></p>
                
                
            </a>
            
            `;

            //  <p class="forsal">For Sale</p>
            // <p class="proj-inCont">${project.des}</p>
            // <p class="proj-inPric">${project.price}</p>

        // Add an onclick event to the project card
        projectCard.onclick = () => {
            storeProjectData(project); // Store project data in localStorage
            renderSelectedProject(project); // Render the selected project
        };

        // Append the project card to the project list container
        projectList.appendChild(projectCard);
    }

    // Function to render all projects
    function renderAllProjects(projects) {
        const projectList = document.getElementById("projectList");
        projectList.innerHTML = ""; // Clear any existing content
        projects.forEach((project) => {
            renderProjectItem(project);
        });
    }

    // Function to fetch projects in real-time from Firestore
    async function getProjectsRealTime() {
        const dbRef = collection(db, "Projects");

        onSnapshot(dbRef, (querySnapshot) => {
            const projects = [];
            querySnapshot.forEach((doc) => {
                projects.push(doc.data());
            });
            renderAllProjects(projects);
        });
    }

    // Function to store project data in localStorage
    function storeProjectData(project) {
        localStorage.setItem("selectedProject", JSON.stringify(project));
    }

    // Function to render selected project details
    function renderSelectedProject(project) {
        const projectList1 = document.getElementById("projectList1");

        // Clear any existing content
        projectList1.innerHTML = "";

        // Create the structure for the selected project
        const projectDetails = document.createElement("div");
        projectDetails.classList.add("col-12", "text-center", "pb-lg-5");

        // projectDetails.innerHTML = `
        //     <div class="img-posrel">
        //         <img src="${project.img_url}" class="w-100" alt="Project Image">
        //         <p class="forsal">For Sale</p>
        //     </div>
        //     <p class="proj-nm1 pt-4">${project.title}</p>
        //     <p class="proj-inCont">${project.des}</p>
        //     <p class="proj-inCont">${project.feets}</p>
        //     <p class="proj-inPric">${project.price}</p>
        // `;


        projectDetails.innerHTML = `

        <img src="${project.img_url}" class="pro-det" alt="">


        <p class="prop-subhed pt-4 pb-2 mb-0">
         ${project.title}
        </p>

        <p class="proj-inCont fs-6 fw-bold">${project.locations}</p>

        <p class="proj-inCont ">${project.feets}</p>
                <p class="proj-inCont mb-5"><b>Land Parcel : ${project.land1}</b></p>

        <section class="sec in-cont">

    <div class="container py-lg-5">
        <div class="row d-flex align-items-center py-lg-5">
            <div class="col-lg-8 pe-lg-5">

                <p class="cm-fnt">
                    ${project.des}
                </p>



            </div>
            <div class="col-lg-4 ps-lg-5 ps-4 text-start ov-content pt-lg-0 pt-5">


                <div class="ovr-viw pb-3">
                    <div class="w-25">
                        <img src="./assetes/images/properties2/bed.png" class="ov-img" alt="">
                    </div>

                    <div class="w-75">
                        <p class="cont22">
                            4 <br>
                            BEDS
                        </p>
                    </div>
                </div>

                <div class="ovr-viw pb-3">
                    <div class="w-25">
                        <img src="./assetes/images/properties2/bath.png" class="ov-img" alt="">
                    </div>

                    <div class="w-75">
                        <p class="cont22">
                            5 <br>
                            BATHS
                        </p>
                    </div>
                </div>


                <div class="ovr-viw pb-3">
                    <div class="w-25">
                        <img src="./assetes/images/properties2/area.png" class="ov-img" alt="">
                    </div>

                    <div class="w-75">
                        <p class="cont22">
                        ${project.land2}
                            <br>
                            LIVING AREA
                        </p>
                    </div>
                </div>


            </div>
        </div>
    </div>

</section>
    `;


        // Append the selected project details
        projectList1.appendChild(projectDetails);
    }

    // Function to load selected project details on page load
    function loadSelectedProjectOnPageLoad() {
        const storedProject = localStorage.getItem("selectedProject");
        if (storedProject) {
            const project = JSON.parse(storedProject);
            renderSelectedProject(project);
        }
    }

    // Event Listener: Load stored project on page load
    document.addEventListener("DOMContentLoaded", loadSelectedProjectOnPageLoad);

    // Fetch projects on page load
    getProjectsRealTime();
</script>

<style>
    /* Optional CSS to style the project cards */
    /* .project-card {
        border: 1px solid #ddd;
        padding: 10px;
        margin: 10px;
        width: 300px;
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
    } */

    .img-posrel {
        position: relative;
    }


    .pro-det {
        width: 100%;
        /* height: 350px;
        object-fit: cover; */
    }

    /* .forsal {
        position: absolute;
        top: 10px;
        left: 10px;
        background-color: red;
        color: white;
        padding: 5px;
    } */

    .proj-nm1,
    .proj-inCont,
    .proj-inPric {
        margin: 5px 0;
    }
</style>

<?php
include 'footer.php';
?>