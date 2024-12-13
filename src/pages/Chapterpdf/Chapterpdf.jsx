import React, { useEffect, useState } from "react";
import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link, useParams } from "react-router-dom";

import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

import "./Chapterpdf.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const Chapterpdf = () => {
  const [subject, setSubject] = useState([]);
  const [selectedPdf, setSelectedPdf] = useState(null);
  const [distionarypgf, setDistionarypgf] = useState(null);
  useEffect(() => {
    const disableRightClick = (e) => e.preventDefault();
    document.addEventListener("contextmenu", disableRightClick);

    return () => {
      document.removeEventListener("contextmenu", disableRightClick);
    };
  }, []);
  useEffect(() => {
    fetch("http://localhost:5000/subjects")
      .then((res) => res.json())
      .then((data) => setSubject(data));
  }, []);

  const { id } = useParams();
  console.log(id);

  return (
    <>
      <Header />
      <div>
        <div className="nav-slider md:w-[100%] w-[100%] text-sm mx-auto md:mt-40 mt-20">
          <div className="flex justify-center gap-8 flex-wrap ">
            <div className="md:w-[100%] shadow-lg p-4 rounded-lg">
              <div className="py-2 text-white bg-[#ef305c] rounded-xl">
                <h1 className="text-2xl text-center">ALL</h1>
              </div>

              <div className="py-2  ">
                {subject.map((item) => {
                  return (
                    <>
                      {item.chapaters.map((item2, index) => {
                        if (item2.name === id) {
                          return (
                            <>
                              <div className="py-2 flex gap-12 justify-center">
                                <button
                                  type="button"
                                  class="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-900"
                                >
                                  <button
                                    onClick={() =>
                                      setSelectedPdf(
                                        `http://localhost:5000/images/${item2.notefullpdf}`
                                      )
                                    }
                                    target="_blank"
                                  >
                                    Note PDF
                                  </button>
                                </button>

                                <button
                                  type="button"
                                  class="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-900"
                                >
                                  <button
                                    onClick={() =>
                                      setDistionarypgf(
                                        `http://localhost:5000/images/${item2.distionaryfullpdf}`
                                      )
                                    }
                                    target="_blank"
                                  >
                                    Dictionary PDF
                                  </button>
                                </button>
                              </div>

                              {/* Display selected PDF */}
                            </>
                          );
                        }
                      })}
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <Swiper
          slidesPerView={1}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="flex justify-center">
              {selectedPdf && (
                <div
                  style={{
                    
                    width: "100%",
                    border: "1px solid black",
                  }}
                >
                  <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
                    <Viewer fileUrl={selectedPdf} />
                  </Worker>
                </div>
              )}
            </div>
          </SwiperSlide>
          <SwiperSlide className=" text-center">
            {distionarypgf && (
              <div   style={{
                    
                    width: "100%",
                    border: "1px solid black",
                  }}>
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
                  <Viewer fileUrl={distionarypgf} />
                </Worker>
              </div>
            )}
          </SwiperSlide>
        </Swiper>
      </div>
      <Footer />
    </>
  );
};

export default Chapterpdf;
