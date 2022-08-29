import React from 'react';
import styles from "./FormTravel.module.css";
import MySelect from "../UI/MySelect/MySelect";
import MyButtonOrange from "../UI/MybuttonOrange/MyButtonOrange";

const FormTravel = () => {
    return (
        <form action="#" method="post" className={styles.mail_form}>
            <div>
                <MySelect
                    defaultValue="Location"
                    options={[
                        {value: 'Location1', name: 'Location1'},
                        {value: 'Location2', name: 'Location2'},
                        {value: 'Location3', name: 'Location3'},
                        {value: 'Location4', name: 'Location4'},
                    ]}
                />
                <MySelect
                    defaultValue="Activity"
                    options={[
                        {value: 'Activity1', name: 'Activity1'},
                        {value: 'Activity2', name: 'Activity2'},
                        {value: 'Activity3', name: 'Activity3'},
                        {value: 'Activity4', name: 'Activity4'},
                    ]}
                />
            </div>
            <div>
                <MySelect
                    defaultValue="Grade"
                    options={[
                        {value: 'Grade1', name: 'Grade1'},
                        {value: 'Grade2', name: 'Grade2'},
                        {value: 'Grade3', name: 'Grade3'},
                        {value: 'Grade4', name: 'Grade4'},
                    ]}
                />
                <MySelect
                    defaultValue="Date"
                    options={[
                        {value: 'Date1', name: 'Date1'},
                        {value: 'Date2', name: 'Date2'},
                        {value: 'Date3', name: 'Date3'},
                        {value: 'Date4', name: 'Date4'},
                    ]}
                />
            </div>
            <MyButtonOrange>
                Explore
            </MyButtonOrange>
        </form>
    );
};

export default FormTravel;