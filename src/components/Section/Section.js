import React, {useState} from 'react';
import Filters from "../Filters/Filters";
import Modal from "../Modal/Modal";
// import AddCar from "../AddCar/AddCar";

const Section = () => {
    const [filterVis, setFilterVis] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    console.log(filterVis)
    return (
        <div>
            <div>
                <strong style={{
                    cursor: "pointer"
                }}
                        onClick={() => !filterVis ? setFilterVis(true) : setFilterVis(false)}
                >
                    Filters
                </strong>
                {filterVis ? (<Filters/>) : null}
                {/*<AddCar/>*/}
            </div>
            {isModalOpen ? <Modal isModalOpen ={isModalOpen} setIsModalOpen={setIsModalOpen} />
                : null}
            <button onClick={()=> setIsModalOpen(true)}>Open modal</button>
        </div>
    );
};

export default Section;
