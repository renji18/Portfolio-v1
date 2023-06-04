import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import imageCompression from "browser-image-compression";
import { firestore, storage } from "./config";
import hi from "../assets/hi.png";
import respect from "../assets/respect.png";
import { getPortfolioDataAction } from "../redux/actions";

// returns url for a provided image file
export async function handleUploadImage(file, location) {
  try {
    const compressedImage = await imageCompression(file, {
      maxSizeMB: 1,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
      maxIteration: 10,
      fileType: "image/*",
    });
    const imgRef = ref(storage, location);
    const upload = await uploadBytes(imgRef, compressedImage);
    const res = await getDownloadURL(upload.ref);
    return res;
  } catch (error) {
    console.log(error, "error in handleUploadImage");
  }
}

// update user data
export async function handleSaveUserData() {
  try {
    const data = {
      hero: {
        anyong: "Hi, my name is",
        name: "Aadarsh Jha",
        tag: "I build things for the web",
        intro:
          "I'm a Full-Stack Blockchain Developer specializing in building(and occasionally designing) exceptional digital experiences. Currently, I'm focused on building accessible, human-centered website at",
        company: {
          name: "Kinderpass",
          link: "https://mykinderpass.com/",
        },
      },
      aboutMe: {
        boasting: [
          "Hey there, My name is Aadarsh Jha and I enjoy creating things that live on the internet. My interest in <Web Development> started back when I was in my second semester of college",
          "I started off with Web Development because it has a lot of projects to work with. I created tons of site with various different technologies to try from.",
          "After almost 1 and a half year of creating web pages, I started studying <span className='text-[#00ffc3]'>Blockchain Development</span>",
          "Creating contracts in Solidity, testing them out using ethers and hardhat, and deploying them via thirdweb are just some of the stuff I've experimented with.",
          "There's still a long journey ahead, but the journey is worthwhile. Stick along if you wanna know what else I'll achieve in the near future.",
          "Here are a few technologies I've been working with recently:",
        ],
        skills: [
          "devicon-react-original colored",
          "devicon-express-original",
          "devicon-mongodb-plain colored",
          "devicon-solidity-plain",
          "devicon-nodejs-plain colored",
          "devicon-redux-original colored",
          "devicon-github-original",
          "devicon-tailwindcss-plain colored",
          "devicon-javascript-plain colored",
        ],
      },
      projects: [
        {
          name: "Fund For Fun",
          desc: "A full stack project with React as frontend, Tailwind for css and a smart contract deployed on sepolia test network as the backend.FFF is a decentralized fundraiser project where one can create their own campaigns or dontate to a particular campaign that they like.",
          poster: "1N3EHg9cJUhqdCKze585jt54eRLRqx8Vo",
          github: "https://github.com/renji18/crowd-funder-web3-project",
          images: [
            "19mCy3jbvUULc493u8eufvE-t0m1ovHjv",
            "1T2I6mRWo3i0yVRYQb3km27P0hTNXyKBU",
            "1qjvwJDc0TkMeMaEi2DZfsfTbJ9C3QB5Q",
            "1AonUNkgBeWpXGAf1ltj2TbWcAUNA93Dz",
            "14sYBLfnJfdsfJ05ISxuBSipv-OjhoMf-",
            "1lmyzcW040UfxN4YCWez5qbOuuBgBbXWp",
            "1zHkE47XG6ivLW3C-dMtmlapfJP2MWvzU",
            "1TBelkfI5fI1mBUl5WzxUKaPRbsRSS4v8",
          ],
        },
        {
          name: "Dappcord",
          desc: "Dappcord is a decentralized discord clone where one can mint nft's and join a discord channel to have discussions about their favourite topics.Used Reactjs for frontend, external css for styling and smart contract as a backend server",
          poster: "1Ql9nx4PoxAyKJ5pgEJ11T2QsIAglSKqL",
          github: "https://github.com/renji18/dappcord-a-web3-discord-clone",
          images: [
            "1gfyO4_9ahuFJuHhz6XEhVIDJbyFAdusG",
            "1ZUGkR-AVY-id3lgc62TI8inAy4OAZWKP",
            "1BAkaHC2XavAKiww5OzME_3bV_cQcbo_h",
            "1RU3rDI1GOZ9hq5JMYLvo63w7TYFJjDc1",
            "1QSjqm--n3iym7awGEfh24wayxhsGuZjz",
            "1-s7kaxX-qWGm-4O3xuRGeLa5waruPMv5",
          ],
        },
        {
          name: "Your Mart",
          desc: "A full stack E-commerce website where you can buy, sell and track every movement in status of your product.Used Reactjs for frontend, and various react 3rd party libraries to create beautiful UI.Used Redux state management.And Express, MongoDb for backend server and database.",
          poster: "179fyMLU9jv3avvDHLVUyf5c8rEsyZJzx",
          github: "https://github.com/renji18/YourMart",
          images: [
            "1_vVLAqplxtMqoBiDms0gy_LpXhdEeqTJ",
            "1iHA7TjfS-l4xLWjIw_ZC73vsTO_TsvLd",
            "1P8x1f0lA-YAKLrm7ZHFcXr4Z0HWD1cs_",
            "1wiru_tDOm5MX3Nb255xBdR8vuCjtmSmK",
            "1DBnJPUrbbLfY-V4l_K3rdlJQLIzenIP6",
            "1dTvT7X5vt81BAAB3IX7DolGAyXWXsIkM",
            "1REw0KgCV_4_e15j7nqr2NdAM0l1vWSos",
            "1E82PvDQJe1uGA1hjkHktAs7eoKVAQ3x9",
            "1EYWDxd0AzyAHz1AJsugz5oLInobej1M5",
            "1zJFB-L-xwLsXSGEGqfdsWbur-Ucnx5N1",
            "1hTrd8A3vaM-RhWEh63fP0HgdlfEdC7D2",
            "1Zkthj9EKrp89MU4lMLCGUag7qrJzrRSz",
            "1yOipfF3HeLzfi5X6dH3bAS0cs1nCh_mp",
            "1NVVuWF85T1CoPoarUgTYOqcsoO6y1GJo",
            "1D38Xgl16ku6QyO4OAQ9OoDhSAEN_0LZJ",
          ],
        },
        {
          name: "IMCD",
          desc: "A react based project using various react related third party libraries to create a movie catalogue.Used the API provided by OMCD for the json data.Reactjs for frontend and tailwind for css.",
          poster: "10LO4toSc19VO2yaU2lyq4TShUtUqpedd",
          github: "https://github.com/renji18/IMCD",
          images: [
            "1FTQlmMdWaGhD9wGPpOm4sEXrU_eP0fBZ",
            "1XyrbmVgFgvfGTIa4njzR4lByLcV4uKB2",
            "1iSnVI1AKIp2YVjSWkow-LTLFP0JTWfCL",
            "13wK-lbH4PvVQbKwsnYHB4-ohQDvxpt9Z",
            "1X-58PMIQm6nc7K9uTU6ZasMxrH9yy5mp",
            "14McrfnD2-PfSCdq4gigwX-8UiBeBh7K0",
            "1CMyrmSbCy6OlMZNEXWFN7DWtXCWLD7OR",
          ],
        },
      ],
      footer: {
        left: {
          name: "Aadarsh",
          email: "aadarshjha1401@gmail.com",
          number: 7600081901,
          designation: "Software Developer",
        },
        right: [
          { title: "Github", link: "https://github.com/renji18" },
          {
            title: "Instagram",
            link: "https://www.instagram.com/renji_riverstone/",
          },
          {
            title: "LinkedIn",
            link: "https://linkedin.com/in/aadarsh-jha-b74330240",
          },
          {
            title: "Resume",
            link: "https://drive.google.com/file/d/1JwFTOZ_zLs5MfQMEb_xxXWcfiLMhw4ZZ/view?usp=sharing",
          },
        ],
      },
    };

    const dataRef = doc(firestore, "portfolioData", "renji_riverstone");

    await updateDoc(dataRef, data);
    const docSnap = await getDoc(dataRef);
    console.log(docSnap.data());
  } catch (error) {
    console.log(error, "Error in handleSaveUserData");
  }
}

// get user data
export async function handleGetPortfolioData(dispatch) {
  try {
    const docRef = doc(firestore, "portfolioData", "renji_riverstone");
    const docSnap = await getDoc(docRef);
    dispatch(getPortfolioDataAction(docSnap.data()));
  } catch (error) {
    console.log(error, "handleGetPortfolioData");
  }
}
