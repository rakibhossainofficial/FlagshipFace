import { useLoaderData, useNavigate, useParams } from "react-router";
import { FaAngleLeft } from "react-icons/fa";
import Button from "../Components/ui/Button";
import { BsFillCartPlusFill } from "react-icons/bs";
import { MdBookmarkAdd } from "react-icons/md";
import { Helmet } from "react-helmet-async";

const PhoneDetails = ({ label }) => {
  const data = useLoaderData();
  const {id} = useParams();
  const singlePhone = data.find((phone)=> phone.id === parseInt(id))


  const { brand, price, description, storage, image, model, camera_info } = singlePhone;

  const handleNevigate = useNavigate();

  return (
    <div>
      <Helmet>
        <title> Phone Details | {model}</title>
      </Helmet>
      <button
        onClick={() => handleNevigate(-1)}
        className="group border px-4 py-2 rounded-md my-4 cursor-pointer hover:bg-black hover:text-white transition duration-300 flex items-center"
      >
        <span className="transform transition-transform duration-300 group-hover:-translate-x-1">
          <FaAngleLeft />
        </span>
        Back
      </button>
      <div className="max-w-2xl mx-auto my-10 p-6 bg-white shadow-lg rounded-lg border border-gray-200">
        <img className="rounded-lg" src={image} alt="" />
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-800 my-4">
            {model} Specifications
          </h2>
          <div className="my-3 flex gap-5">
            <Button label={<BsFillCartPlusFill />}></Button>
            <Button label={<MdBookmarkAdd />}></Button>
          </div>
        </div>
        <table className="w-full text-left border-collapse">
          <tbody>
            <tr className="border-b">
              <th className="py-2 px-4 font-medium text-gray-600">Model</th>
              <td className="py-2 px-4 text-gray-800">{model}</td>
            </tr>
            <tr className="border-b">
              <th className="py-2 px-4 font-medium text-gray-600">Brand</th>
              <td className="py-2 px-4 text-gray-800">{brand}</td>
            </tr>
            <tr className="border-b">
              <th className="py-2 px-4 font-medium text-gray-600">Camera</th>
              <td className="py-2 px-4 text-gray-800">{camera_info}</td>
            </tr>
            <tr className="border-b">
              <th className="py-2 px-4 font-medium text-gray-600">Storage</th>
              <ul>
                {storage.map((ram) => (
                  <td className="py-2 px-4 text-gray-800">
                    <li>⭕{ram}</li>
                  </td>
                ))}
              </ul>
            </tr>
            <tr className="border-b">
              <th className="py-2 px-4 font-medium text-gray-600">
                Description
              </th>
              <td className="py-2 px-4 text-gray-800">{description}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PhoneDetails;
