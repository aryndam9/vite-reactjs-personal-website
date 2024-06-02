import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import './css/CV.css';
import { Link } from '@phosphor-icons/react'

const createIconLink = (url) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="icon-link">
      <Link size={32} color="#ffa86a" weight="duotone" style={{ display: 'inline',  marginLeft: '8px' }} />
    </a>
  );
};

const txtHighlight = (text) => {
  return <div className='txt-highlight'>{text}</div>;
}

const CV = () => {
  return (
    <div className="cv-container">
      <h1>Curriculum Vitae</h1>

      <Accordion type="single" collapsible className="cv-accordion" defaultValue='awards'>
        {/* Fellowships and Awards */}
        <AccordionItem value="awards">
          <AccordionTrigger className='accordion-div'>Fellowships and Awards</AccordionTrigger>
          <AccordionContent>
            <div className="section-content">
              <ul>
                <li>
                  Awarded 1st Place in {txtHighlight('#T-TeC 2023 - Telespazio Technology contest')} (Italy) for the 'ESTESIA' project, including EUR 10,000 prize and invitation to Seraphim Space Accelerator program.{createIconLink('https://www.telespazio.com/en/innovation/t-tec-2023')}
                </li>
                <li>
                  Received a {txtHighlight('Fellowship')} to cover Living expenses by Institut de Física d'Altes Energies (IFAE), Barcelona, Spain, 2022-2023.
                </li>
                <li>
                  {txtHighlight('Full Tuition fee waiver Fellowship')} by Barcelona Institute of Science and Technology (BIST)- Universitat Pompeu Fabra (UPF), Spain, 2022-2023.
                </li>
                <li>
                  {txtHighlight('Invited Panelist')} at the NASA Transform to Open Science (TOPS) April Forum.{createIconLink('https://docs.google.com/viewer?url=https://raw.githubusercontent.com/aryndam9/nasa-spaceappschallenge/main/NASA_TOPS_Forum_Participation_Metrics.pdf')}
                </li>
                <li>
                  {txtHighlight('NASA SpaceApps Challenge 2022 Global Finalist')} - We were among the top 35 out of 5,327 teams and 31,561 participants. {createIconLink('https://2022.spaceappschallenge.org/challenges/2022-challenges/measuring-open-science/teams/the-open-metric/project')}
                </li>
                <li>
                  {txtHighlight('Silver Medalist')} - Amity University, India - 2022.
                </li>
                <li>
                  {txtHighlight('Smart India Hackathon 2022 Winners')} - ISRO's Problem statement: Deep Learning based Cyclone Intensity estimation using INSAT-3D IR imagery. {createIconLink('https://www.linkedin.com/posts/arindam-ghosh96_smartindiahackathon2022-sih2022-hackathon-activity-6971169844272476160-Y0QR')}
                </li>
                <li>
                  {txtHighlight('DST-INSPIRE Fellowship')} - Department of Science and Technology (DST), Government of India, 2015-2017.
                </li>
                <li>
                Qualified {txtHighlight('National Entrance Screening Test (NEST 2015)')} - Selected for UM DAE CEBS, India.
                </li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Research Experience */}
        <AccordionItem value="research">
          <AccordionTrigger className='accordion-div'>Research Experience</AccordionTrigger>
          <AccordionContent>
            <div className="section-content">
              <p>A. Ghosh and S. Thakur, "Review of Brain Tumor MRI Image Segmentation Methods for BraTS Challenge Dataset," in 2022 12th International Conference on Cloud Computing, Data Science & Engineering (Confluence), Noida, India, Jan. 2022, pp. 405–410.DOI</p>
              <p>A. Ghosh and I. Singh, "INCYDE: A large scale cyclone detection and intensity estimation dataset using satellite infrared imagery" (Submitted, currently under review).DOI</p>
              <p>A. Ghosh and I. Singh, "Cyclone Vision: A Comprehensive Deep Learning Framework and Web App for Early Cyclone Detection and Monitoring" (Submitted, currently under review).</p>

              <h3>PIC – Port d'Informació Científica , UAB, Barcelona, Spain (May 2023 - July 2023)</h3>
              <p>Neural spike detection in retina microscopy</p>
              <p>Supervisor: Dr. Martin Børstad Eriksen, PIC, UAB, Barcelona.</p>
              <p>I was part of a collaborative research project between VHIR, ICFO, and PIC, which focuses on exploring the effects of photoreceptor restoration therapies. Specifically, my work involved an exploratory analysis of potential spike detection techniques for light sheet microscopy images of organoids. Finding such techniques would enable a more detailed 3D analysis of retina activity, contributing to the understanding of the impact of photoreceptor restoration therapies.</p>

              <h3>Institut de Fisica d'Altes Energies (IFAE), Barcelona, Spain (Oct 2022 - July 2023)</h3>
              <p>Optimizing Proton Tracking and Energy Determination for Improved Proton CT Imaging</p>
              <p>Supervisor: Dr. Pillar Casado and Dr. Throsten Lux, IFAE-BIST.</p>
              <p>I was involved in developing an algorithm that utilizes image processing and machine learning techniques to reconstruct the energy of protons by analyzing their trajectories through a range detector, thus optimizing Proton Tracking and Energy Determination for Improved Proton CT (pCT) Imaging.</p>

              <h3>Amity University- Noida, India (Oct 2021 - Jan 2022)</h3>
              <p>Brain Tumor MRI classification using deep learning</p>
              <p>Supervisor: Professor Sanjeev Thakur, HoD-CSE, ASET</p>
              <p>I used different feature descriptors like Local Binary Pattern (LBP) and Histogram of Oriented Gradients (HOG) to extract features from MRI images using OTSU thresholding. I finetuned all layers of the transfer learning models like VGG-16, Resnet-18, Densenet-121 to get better classification rate.</p>

              <h3>Amity University- Noida, India (Jun 2021 - Sept 2021)</h3>
              <p>Review of Brain tumor segmentation methods</p>
              <p>Supervisor: Professor Sanjeev Thakur, HoD-CSE, ASET</p>
              <p>I did a comparative study of different Machine Learning and Computer Vision methods used for Brain Tumor Segmentation. The Brain tumor segmentation (BraTS) challenge dataset from 2012 to 2020 was used on the models being compared. I provided an overall workflow, comparison of different models and an assessment of the existing research literature with corresponding future advancements.</p>

              <h3>Indian Statistical Institute, Kolkata, India (Jun 2019 - Nov 2019)</h3>
              <p>Comparative study of HEp-2 Cells classification using dictionary learning</p>
              <p>Supervisor: Professor Pradipta Maji, Machine Intelligence Unit</p>
              <p>It was a comparative study of different discriminating Dictionary Learning methods. Algorithms like Sparse Representation based classification, Label consistent K-SVD 1, Label consistent K-SVD 2 and Fisher Discriminant Dictionary Learning were tested by classifying the MIVIA HEp-2 cells staining pattern image database with different feature descriptors.</p>

              <h3>Institute of Chemical Technology, Mumbai, India (Jan 2019 - Apr 2019)</h3>
              <p>Generative Adversarial Networks (GAN) to Denoise images</p>
              <p>Supervisor: Professor Ajit Kumar, HoD-Mathematics department</p>
              <p>I resized images from the Image-Net ILSVRC2013 Data set and added Gaussian noise. This data was used to train a GAN model and denoise images.</p>

              <h3>Institute of Chemical Technology, Mumbai, India (Nov 2018 - Dec 2018)</h3>
              <p>Forex Forecasting Using Support Vector Machines in Python</p>
              <p>Supervisor: Professor Ajit Kumar, HoD-Mathematics department</p>
              <p>I achieved an in-depth mathematical understanding of SVC, SVR and Kernels by implementing a forecasting model on Forex currency pairs. Subsequently, I presented a comparison of different kernels on SVR with Linear Regression.</p>

              <h3>Indian Institute of Technology (IITB)-Bombay, India (May 2017 - Jun 2017)</h3>
              <p>Parallel Programming using CUDA</p>
              <p>Supervisor: Professor Sachin Patkar, Electrical Engineering department</p>
              <p>I worked at the High Performance Computing Laboratory (HPCL) on boolean matrix-vector multiplication (BMV) using Wiedemann method in CUDA</p>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Professional Experience */}
        <AccordionItem value="professional">
          <AccordionTrigger className='accordion-div'>Professional Experience</AccordionTrigger>
          <AccordionContent>
            <div className="section-content">
              <h3>Estesia - Smart Analytics, Chile (Nov 2023 - Present)</h3>
              <p>AI Research Scientist</p>
              <p>Currently working on leveraging GeoSpatial data, and using tailor made AI models to deal with real-time satellite images to segment for extraction surfaces and subsoils, covering the complete cycle of water dynamics to be analyzed and used in the mining industry for sustainable lithium extraction.</p>

              <h3>ClaimZippy Pvt. Ltd., India (Sep 2023 - Present)</h3>
              <p>Machine Learning and AI consultant</p>
              <p>Enhancing ClaimZippy's AI computer vision to automatically extract handwritten and printed data from claim documents, enabling efficient processing. Identifying and advising on opportunities to integrate emerging innovations; improving automation, accuracy and workflow of the AI claims review system. Consulting executives to incorporate the latest artificial intelligence into products that serve policyholders and carriers.</p>

              <h3>Cognizant (Feb 2022 - June 2022)</h3>
              <p>AWS Data Engineer Internship</p>
              <p>I completed a project and a case study that significantly enhanced my skills in various technologies. Specifically, I gained hands-on experience with Pyspark, SQL, and Python, which were used extensively in the project.</p>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Education */}
        <AccordionItem value="education">
          <AccordionTrigger className='accordion-div'>Education</AccordionTrigger>
          <AccordionContent>
            <div className="section-content">
              <h3>Barcelona Institute of Science and Technology, Barcelona, Spain</h3>
              <p>2022 - 2023</p>
              <p>Master of Multidisciplinary Research in Experimental Sciences (MMRES)</p>
              <p>CGPA: 8.4/10</p>
              <p>Thesis - Optimizing Proton Tracking and Energy Determination for Improved Proton CT Imaging</p>

              <h3>Amity University, Noida, India</h3>
              <p>2020 - 2022</p>
              <p>Master of Technology (M.Tech)</p>
              <p>CGPA: 9.43/10</p>
              <p>Specialization - Computer Science and Engineering</p>

              <h3>University of Mumbai- Department of Atomic Energy- Center for excellence in Basic Science (UM DAE CEBS), India</h3>
              <p>2015 - 2020</p>
              <p>Integrated Master of Science (B.Sc and M.Sc)</p>
              <p>CGPA: 6.26/10</p>
              <p>Specialization - Mathematics</p>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Conference and Workshops */}
        <AccordionItem value="conferences">
          <AccordionTrigger className='accordion-div'>Conference and Workshops</AccordionTrigger>
          <AccordionContent>
            <div className="section-content">
              <ul>
                <li>Attented Global Partnership on Artificial Intelligence (GPAI 2023).</li>
                <li>Presented a poster at BIST Symposium on Microscopy 2023</li>
                <li>Attended Workshop organized by Smart India Hackathon on AWS Cloud Computing and Machine learning fundamentals (2022).</li>
                <li>Presented a paper at the 12th International Conference on Cloud Computing, Data Science & Engineering (Confluence), 2022.</li>
                <li>Attended Winter School on Advances in Deep Learning for Multimedia Signal Processing (2022).</li>
                <li>Attended IEEE Quantum Computing Healthcare Summit (2022).</li>
                <li>Attended the Conference on Computer Vision and Pattern Recognition (CVPR- 2021) virtually.</li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Other Achievements and Extra-Curricular Activities */}
        <AccordionItem value="achievements">
          <AccordionTrigger className='accordion-div'>Other Achievements and Extra-Curricular Activities</AccordionTrigger>
          <AccordionContent>
            <div className="section-content">
              <ul>
                <li>Organized the BIST-MMRES Scihack 2023 hackathon for high school students in Catalonia, Spain.</li>
                <li>Global finalist (top 35) in the NASA International Space Apps Challenge 2022.</li>
                <li>Active IEEE Graduate Student Member (2022).</li>
                <li>Active member of Amity Artificial Intelligence Club (2021).</li>
                <li>Qualified Google CodeJam- Qualification Round (2020).</li>
                <li>Received Google Hash Code certification- Qualification round (2020).</li>
                <li>Attended meet-ups and talks organized by School of AI- Mumbai (2018).</li>
                <li>Founding member of E-game Club at UM-DAE CEBS and organized multiple intra-college e-sports events (2017).</li>
                <li>Organized Jigyasa, an inter-college science quiz competition at UM DAE CEBS in collaboration with St. Xaviers College, Institute of Chemical Technology, Mumbai and Indian Institute of Technology Bombay (2017).</li>
                <li>Organized Ragnarok, an inter-college sports event at UM DAE CEBS (2015 and 2016).</li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Relevant Courses */}
        <AccordionItem value="courses">
          <AccordionTrigger className='accordion-div'>Relevant Courses</AccordionTrigger>
          <AccordionContent>
            <div className="section-content">
              <h3>Core Courses</h3>
              <ul>
                <li>Advanced Data Structures</li>
                <li>Principles Of Machine Learning</li>
                <li>Pattern Recognition and Image Processing</li>
                <li>Probability Theory</li>
                <li>Calculus and Linear Algebra</li>
                <li>Graph Theory</li>
              </ul>

              <h3>Other Courses</h3>
              <ul>
                <li>Mathematical Foundation of CS</li>
                <li>Data Warehousing and Data Mining</li>
                <li>Data Compression and Techniques</li>
                <li>Discrete Mathematics</li>
                <li>Statistical Techniques and Applications</li>
                <li>Infrastructure for Cloud</li>
              </ul>

              <h3>Certification Courses</h3>
              <ul>
                <li>Machine Learning by Andrew Ng on Coursera.</li>
                <li>Deep Learning Specialization (5 courses) on Coursera.</li>
                <li>Introduction to Python for Data Science Course on Datacamp.</li>
                <li>Algorithms: Specialization by Tim Roughgarden on Coursera.</li>
                <li>CS50 Introduction to Artificial Intelligence in Python on edX.</li>
                <li>CS50x Introduction to Computer Science on edX.</li>
                <li>Data Engineering with Databricks.</li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Technical Strengths */}
        <AccordionItem value="skills">
          <AccordionTrigger className='accordion-div'>Technical Strengths</AccordionTrigger>
          <AccordionContent>
            <div className="section-content">
              <table>
                <thead>
                  <tr>
                    <th>Category</th>
                    <th>Skills</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                  <td>Computer Languages</td>
                    <td>Python, Matlab, C, R, SQL, Pyspark</td>
                  </tr>
                  <tr>
                    <td>Tools</td>
                    <td>Pytorch, LaTeX, Mathematica</td>
                  </tr>
                  <tr>
                    <td>Familiar</td>
                    <td>AWS, Mathematica, Sage, Fortran, C++</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
export default CV;