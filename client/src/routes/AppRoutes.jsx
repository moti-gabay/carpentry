import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Layout from '../layouts/Layout';
import LayoutAdmin from '../layouts/LayoutAdmin';
import NotFound404 from '../layouts/NotFound404';
import BuildGuides from '../pages/BuildGuides';
import AboutUs from '../pages/infoPages/AboutUs';
import SingleBuildGuide from '../pages/SingleBuildGuide';
import Home from "../pages/Home";
import CartPayment from '../pages/CartPayment';
import ManageUsers from '../pages/admin/ManageUsers';
import ManageProducts from '../pages/admin/ManageProducts';
import TermsConditions from '../pages/infoPages/TermsConditions';
import ShippingReturnPolicy from '../pages/infoPages/ShippingReturnPolicy'
import ContactUs from '../pages/ContactUs'
import PrivacyPolicy from '../pages/infoPages/PrivacyPolicy';

const AppRoutes = () => {
    const router = createBrowserRouter([
        {
            path:"/",
            element:<Layout/>,
            children: [
                {path:"/", element:<Home/>},
                {path:"/buildGuides", element:<BuildGuides/>},
                {path:"/singleBuildGuide/:id", element:<SingleBuildGuide/>},
                {path:"/about", element:<AboutUs/>},
                {path:"/cartPayment", element:<CartPayment/>},
                {path:"/termsConditions", element:<TermsConditions/>},
                {path:"/shippingReturnPolicy", element:<ShippingReturnPolicy/>},
                {path:"/privacyPolicy", element:<PrivacyPolicy/>},
                {path:"/contactUs", element:<ContactUs/>}

            ]
        },{
            path:"/admin",
            element:<LayoutAdmin/>,
            children: [
                {path:"/admin", element:<ManageUsers/>},
                {path:"/admin/manageProducts", element:<ManageProducts/>}
            ]
        },{
            path:"*",
            element:<NotFound404/>
        }
                 
    ])
  return (
    <RouterProvider router={router}/>
  )
}

export default AppRoutes