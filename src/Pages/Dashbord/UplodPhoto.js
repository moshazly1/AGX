// import axios from "axios";
// import { useRef, useState } from "react";
// import UplodeImge from "../../Imge/UplodeImge.png";
// import { baseURL, SAVEIMAGE } from "../../API/API";

// export default function UplodePhoto() {
//   const [images, setImages] = useState([]);
//   const [uploading, setUploading] = useState(false);
//   const fileInputRef = useRef(null);
//   const progressRefs = useRef([]);

//   function handeImgeChange(e) {
//     const files = Array.from(e.target.files);
//     const newImages = files.map((file) => ({
//       file,
//       categoryId: "",
//       responseMessage: "",
//       uploaded: false, // ✅ نحدد إن الصورة لسه ما اترفعتش
//     }));
//     setImages((prev) => [...prev, ...newImages]);
//   }

//   function handleInputChange(index, value) {
//     const updatedImages = [...images];
//     if (/^\d*$/.test(value)) {
//       updatedImages[index].categoryId = value;
//       setImages(updatedImages);
//     }
//   }

//   async function HandelUplodPhoto(e) {
//     e.preventDefault();

//     const incomplete = images.some((img) => !img.categoryId);
//     if (incomplete) {
//       alert(
//         "Please fill in the Category ID (number) for each image before uploading."
//       );
//       return;
//     }

//     setUploading(true);

//     for (let i = 0; i < images.length; i++) {
//       if (images[i].uploaded) continue; // ✅ نتخطى الصور اللي اترفعت قبل كده

//       const form = new FormData();
//       form.append("file", images[i].file, images[i].file.name);
//       const categoryIdInt = parseInt(images[i].categoryId, 10);

//       try {
//         const res = await axios.post(
//           `${baseURL}/${SAVEIMAGE}?CategoryId=${categoryIdInt}`,
//           form,
//           {
//             onUploadProgress: (event) => {
//               const percent = Math.floor((event.loaded * 100) / event.total);
//               if (progressRefs.current[i]) {
//                 progressRefs.current[i].style.width = `${percent}%`;
//                 progressRefs.current[i].setAttribute("percent", `${percent}%`);
//               }
//             },
//           }
//         );

//         setImages((prev) => {
//           const updated = [...prev];
//           updated[i].responseMessage =
//             res.data.message || "Uploaded successfully";
//           updated[i].uploaded = true; // ✅ نحدد إنها اترفعت
//           return updated;
//         });
//       } catch (err) {
//         const errorMsg = err.response?.data?.message || "Upload failed";
//         setImages((prev) => {
//           const updated = [...prev];
//           updated[i].responseMessage = errorMsg;
//           updated[i].uploaded = false;
//           return updated;
//         });
//       }
//     }

//     setUploading(false);
//   }

//   function HandelopenImges() {
//     fileInputRef.current.click();
//   }

//   const showImge = images.map((img, key) => (
//     <div key={key} className="showImge">
//       <img className="insedimge" src={URL.createObjectURL(img.file)} alt="" />
//       <div className="info">
//         <p className="imgeName">{img.file.name}</p>
//         <p>
//           {img.file.size / 1024 < 900
//             ? (img.file.size / 1024).toFixed(2) + "KB"
//             : (img.file.size / (1024 * 1024)).toFixed(2) + "MB"}
//         </p>
//         <div className="custom-progress">
//           <span
//             className="inner-progress"
//             ref={(el) => (progressRefs.current[key] = el)}
//           ></span>
//         </div>

//         {/* عرض رسالة النتيجة تحت الصورة */}
//         {img.responseMessage && (
//           <div
//             style={{
//               color: img.responseMessage.toLowerCase().includes("fail")
//                 ? "red"
//                 : "green",
//               fontWeight: "bold",
//               marginTop: "5px",
//             }}
//           >
//             {img.responseMessage}
//           </div>
//         )}
//       </div>

//       <div className="Catigory">
//         <div className="form-control">
//           <input
//             style={{ width: "100%" }}
//             required
//             type="number"
//             name="catigoryid"
//             value={img.categoryId}
//             onChange={(e) => handleInputChange(key, e.target.value)}
//             placeholder="Category ID..."
//           />
//           <label>Category ID</label>
//         </div>
//       </div>
//     </div>
//   ));

//   return (
//     <div className="container">
//       <div className="row">
//         <div className="form-center">
//           <form onSubmit={HandelUplodPhoto}>
//             <label>Select Image</label>
//             <input
//               ref={fileInputRef}
//               hidden
//               multiple
//               type="file"
//               onChange={handeImgeChange}
//             />

//             <div onClick={HandelopenImges} className="Uplodeimges">
//               <img className="ablodimge" src={UplodeImge} alt="Upload Here" />
//               <p
//                 style={{
//                   color: "#0086fe",
//                   fontWeight: "bold",
//                   fontSize: "20px",
//                 }}
//               >
//                 Upload Photo
//               </p>
//             </div>

//             <div>{showImge}</div>

//             <button className="btnUPload" disabled={uploading}>
//               {uploading ? "Uploading..." : "Save"}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// ===================================================
// import axios from "axios";
// import { useRef, useState } from "react";
// import UplodeImge from "../../Imge/UplodeImge.png";
// import { baseURL, SAVEIMAGE } from "../../API/API";

// export default function UplodePhoto() {
//   const [images, setImages] = useState([]);
//   const [uploading, setUploading] = useState(false);
//   const fileInputRef = useRef(null);
//   const progressRefs = useRef([]);

//   function handeImgeChange(e) {
//     const files = Array.from(e.target.files);
//     const newImages = files.map((file) => ({
//       file,
//       categoryId: "",
//       responseMessage: "",
//       uploaded: false, // ✅ نحدد إن الصورة لسه ما اترفعتش
//     }));
//     setImages((prev) => [...prev, ...newImages]);
//   }

//   function handleInputChange(index, value) {
//     const updatedImages = [...images];
//     if (/^\d*$/.test(value)) {
//       updatedImages[index].categoryId = value;
//       setImages(updatedImages);
//     }
//   }

//   async function HandelUplodPhoto(e) {
//     e.preventDefault();

//     const incomplete = images.some((img) => !img.categoryId);
//     if (incomplete) {
//       alert(
//         "Please fill in the Category ID (number) for each image before uploading."
//       );
//       return;
//     }

//     setUploading(true);

//     for (let i = 0; i < images.length; i++) {
//       if (images[i].uploaded) continue; // ✅ نتخطى الصور اللي اترفعت قبل كده

//       const form = new FormData();
//       form.append("file", images[i].file, images[i].file.name);
//       const categoryIdInt = parseInt(images[i].categoryId, 10);

//       try {
//         const res = await axios.post(
//           `${baseURL}/${SAVEIMAGE}?CategoryId=${categoryIdInt}`,
//           form,
//           {
//             onUploadProgress: (event) => {
//               const percent = Math.floor((event.loaded * 100) / event.total);
//               if (progressRefs.current[i]) {
//                 progressRefs.current[i].style.width = `${percent}%`;
//                 progressRefs.current[i].setAttribute("percent", `${percent}%`);
//               }
//             },
//           }
//         );

//         setImages((prev) => {
//           const updated = [...prev];
//           updated[i].responseMessage =
//             res.data.message || "Uploaded successfully";
//           updated[i].uploaded = true; // ✅ نحدد إنها اترفعت
//           return updated;
//         });
//       } catch (err) {
//         const errorMsg = err.response?.data?.message || "Upload failed";
//         setImages((prev) => {
//           const updated = [...prev];
//           updated[i].responseMessage = errorMsg;
//           updated[i].uploaded = false;
//           return updated;
//         });
//       }
//     }

//     setUploading(false);
//   }

//   function HandelopenImges() {
//     fileInputRef.current.click();
//   }

//   const showImge = images.map((img, key) => (
//     <div key={key} className="showImge">
//       <img className="insedimge" src={URL.createObjectURL(img.file)} alt="" />
//       <div className="info">
//         <p className="imgeName">{img.file.name}</p>
//         <p>
//           {img.file.size / 1024 < 900
//             ? (img.file.size / 1024).toFixed(2) + "KB"
//             : (img.file.size / (1024 * 1024)).toFixed(2) + "MB"}
//         </p>
//         <div className="custom-progress">
//           <span
//             className="inner-progress"
//             ref={(el) => (progressRefs.current[key] = el)}
//           ></span>
//         </div>

//         {/* عرض رسالة النتيجة تحت الصورة */}
//         {img.responseMessage && (
//           <div
//             style={{
//               color: img.responseMessage.toLowerCase().includes("fail")
//                 ? "red"
//                 : "green",
//               fontWeight: "bold",
//               marginTop: "5px",
//             }}
//           >
//             {img.responseMessage}
//           </div>
//         )}
//       </div>

//       <div className="Catigory">
//         <div className="form-control">
//           <input
//             style={{ width: "100%" }}
//             required
//             type="number"
//             name="catigoryid"
//             value={img.categoryId}
//             onChange={(e) => handleInputChange(key, e.target.value)}
//             placeholder="Category ID..."
//           />
//           <label>Category ID</label>
//         </div>
//       </div>
//     </div>
//   ));

//   return (
//     <div className="container">
//       <div className="row">
//         <div className="form-center">
//           <form onSubmit={HandelUplodPhoto}>
//             <label>Select Image</label>
//             <input
//               ref={fileInputRef}
//               hidden
//               multiple
//               type="file"
//               onChange={handeImgeChange}
//             />

//             <div onClick={HandelopenImges} className="Uplodeimges">
//               <img className="ablodimge" src={UplodeImge} alt="Upload Here" />
//               <p
//                 style={{
//                   color: "#0086fe",
//                   fontWeight: "bold",
//                   fontSize: "20px",
//                 }}
//               >
//                 Upload Photo
//               </p>
//             </div>

//             <div>{showImge}</div>

//             <button className="btnUPload" disabled={uploading}>
//               {uploading ? "Uploading..." : "Save"}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// ===================================================
import axios from "axios";
import { useRef, useState } from "react";
import UplodeImge from "../../Imge/UplodeImge.png";
import { baseURL, CATNAMEANDDESCRABTION, SAVEIMAGE } from "../../API/API";

export default function UplodePhoto() {
  const [images, setImages] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [categoryName, setCategoryName] = useState("");
  const [categoryDescription, setCategoryDescription] = useState("");
  const [generatedCategoryId, setGeneratedCategoryId] = useState("");
  const fileInputRef = useRef(null);
  const progressRefs = useRef([]);

  // 🟦 رفع الصور
  function handeImgeChange(e) {
    const files = Array.from(e.target.files);
    const newImages = files.map((file) => ({
      file,
      categoryId: "",
      responseMessage: "",
      uploaded: false,
    }));
    setImages((prev) => [...prev, ...newImages]);
  }

  function handleInputChange(index, value) {
    const updatedImages = [...images];
    if (/^\d*$/.test(value)) {
      updatedImages[index].categoryId = value;
      setImages(updatedImages);
    }
  }

  function HandelopenImges() {
    fileInputRef.current.click();
  }

  async function HandelUplodPhoto(e) {
    e.preventDefault();

    const incomplete = images.some((img) => !img.categoryId);
    if (incomplete) {
      alert("Please fill in the Category ID for each image.");
      return;
    }

    setUploading(true);

    for (let i = 0; i < images.length; i++) {
      if (images[i].uploaded) continue;

      const form = new FormData();
      form.append("file", images[i].file, images[i].file.name);
      const categoryIdInt = parseInt(images[i].categoryId, 10);

      try {
        const res = await axios.post(
          `${baseURL}/${SAVEIMAGE}?CategoryId=${categoryIdInt}`,
          form,
          {
            onUploadProgress: (event) => {
              const percent = Math.floor((event.loaded * 100) / event.total);
              if (progressRefs.current[i]) {
                progressRefs.current[i].style.width = `${percent}%`;
                progressRefs.current[i].setAttribute("percent", `${percent}%`);
              }
            },
          }
        );

        setImages((prev) => {
          const updated = [...prev];
          updated[i].responseMessage =
            res.data.message || "Uploaded successfully";
          updated[i].uploaded = true;
          return updated;
        });
      } catch (err) {
        const errorMsg = err.response?.data?.message || "Upload failed";
        setImages((prev) => {
          const updated = [...prev];
          updated[i].responseMessage = errorMsg;
          updated[i].uploaded = false;
          return updated;
        });
      }
    }

    setUploading(false);
  }

  // 🟩 إضافة التصنيف
  async function handleAddCategory(e) {
    e.preventDefault();

    if (!categoryName || !categoryDescription) {
      alert("Please enter category name and description.");
      return;
    }

    try {
      const res = await axios.post(
        `${baseURL}/${CATNAMEANDDESCRABTION}`,
        {
          name: categoryName,
          description: categoryDescription,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const returnedId = res.data.id || res.data.categoryId;
      setGeneratedCategoryId(returnedId);
      alert("Category added successfully. ID: " + returnedId);
    } catch (error) {
      console.error(error);
      alert("Failed to add category.");
    }
  }

  const showImge = images.map((img, key) => (
    <div key={key} className="showImge">
      <img className="insedimge" src={URL.createObjectURL(img.file)} alt="" />
      <div className="info">
        <p className="imgeName">{img.file.name}</p>
        <p>
          {img.file.size / 1024 < 900
            ? (img.file.size / 1024).toFixed(2) + "KB"
            : (img.file.size / (1024 * 1024)).toFixed(2) + "MB"}
        </p>
        <div className="custom-progress">
          <span
            className="inner-progress"
            ref={(el) => (progressRefs.current[key] = el)}
          ></span>
        </div>

        {img.responseMessage && (
          <div
            style={{
              color: img.responseMessage.toLowerCase().includes("fail")
                ? "red"
                : "green",
              fontWeight: "bold",
              marginTop: "5px",
            }}
          >
            {img.responseMessage}
          </div>
        )}
      </div>

      <div className="Catigory">
        <div className="form-control">
          <input
            style={{ width: "100%" }}
            required
            type="number"
            name="catigoryid"
            value={img.categoryId}
            onChange={(e) => handleInputChange(key, e.target.value)}
            placeholder="Category ID..."
          />
          <label>Category ID</label>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="container">
      <div className="row">
        <div className="form-center">
          {/* 🟩 فورم إضافة التصنيف */}
          <form onSubmit={handleAddCategory} className="add-category-form">
            <div className="form-control">
              <input
                type="text"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
                placeholder="Enter Category Name"
                required
              />
              <label>Category Name</label>
            </div>

            <div className="form-control">
              <input
                type="text"
                value={categoryDescription}
                onChange={(e) => setCategoryDescription(e.target.value)}
                placeholder="Enter Category Description"
                required
              />
              <label>Category Description</label>
            </div>

            <button type="submit" className="btn add-category-btn">
              Add Category
            </button>

            {generatedCategoryId && (
              <p style={{ marginTop: "10px", fontWeight: "bold" }}>
                ✅ Created Category ID: {generatedCategoryId}
              </p>
            )}
          </form>

          <hr style={{ margin: "20px 0" }} />

          {/* 🟦 نموذج رفع الصور (زي ما هو من غير تغيير) */}
          <form onSubmit={HandelUplodPhoto}>
            <label>Select Image</label>
            <input
              ref={fileInputRef}
              hidden
              multiple
              type="file"
              onChange={handeImgeChange}
            />

            <div onClick={HandelopenImges} className="Uplodeimges">
              <img className="ablodimge" src={UplodeImge} alt="Upload Here" />
              <p
                style={{
                  color: "#0086fe",
                  fontWeight: "bold",
                  fontSize: "20px",
                }}
              >
                Upload Photo
              </p>
            </div>

            <div>{showImge}</div>

            <button className="btnUPload" disabled={uploading}>
              {uploading ? "Uploading..." : "Save"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
