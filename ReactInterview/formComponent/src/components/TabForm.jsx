import Profile from "./Profile";
import Interest from "./Interest";
import Setting from "./Setting";
import { useState } from "react";

const TabForm = () => {
    const tabs = [
        {
            name: "Profile",
            component: Profile,
            validate: (data) => {
                const err = {};

                if (!data || !data.name || data.name.length < 2) {
                    err.name = "Name is invalid";
                }

                if (!data || !data.age || data.age < 18) {
                    err.age = "Age is invalid";
                }

                if (!data || !data.email || data.email.length < 2) {
                    err.email = "Email is invalid";
                }

                setErrors(err);
                return err.name || err.age || err.email ? false : true; // fixed typo from 'trrue'
            }
        },
        {
            name: "Interest",
            component: Interest,
            validate: (data) => {
                const err = {};
                if (!data || data.interest.length < 1) {
                    err.interest = "Select at least one interest..";
                }
                setErrors(err);
                return err.interest ? false : true;
            }
        },
        {
            name: "Setting",
            component: Setting, 
            validate: () => {
                return true;
            }
        }
    ];

    const [errors, setErrors] = useState({});
    const [data, setData] = useState({
        name: "Name",
        age: "25",
        email: "email@email.com",
        interest: ["coding"],
        theme: "dark"
    });
    const [activeTab, setActiveTab] = useState(0);

    const ActiveTabComponent = tabs[activeTab].component;

    const handleNextClick = () => {
        if (tabs[activeTab].validate(data)) { // pass 'data' explicitly to validate
            setActiveTab((prev) => prev + 1);
        }
    };

    const handlePrevClick = () => {
        if (tabs[activeTab].validate(data)) { // pass 'data' explicitly to validate
            setActiveTab((prev) => prev - 1);
        }
    };

    const handleSubmitButton = () => {
        console.log(data);
    };

    // Handle tab change with validation
    const handleTabChange = (index) => {
        if (tabs[activeTab].validate(data)) { // validate before changing tab
            setActiveTab(index);
        }
    };

    return (
        <>
            <div className="heading-container">
                {tabs.map((t, index) => (
                    <div key={index} className="heading" onClick={() => handleTabChange(index)}>
                        {t.name}
                    </div>
                ))}
            </div>
            <div className="tab-body">
                <ActiveTabComponent data={data} setData={setData} errors={errors} />
            </div>
            <div className="button">
                {activeTab > 0 && (
                    <button onClick={handlePrevClick} className="prev">Prev</button>
                )}
                {activeTab < tabs.length - 1 && (
                    <button onClick={handleNextClick}>Next</button>
                )}
                {activeTab === tabs.length - 1 && (
                    <button onClick={handleSubmitButton}>Submit</button>
                )}
            </div>
        </>
    );
};

export default TabForm;
