import React from 'react'
import {connect} from 'react-redux'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {selectEndDate, selectStartDate} from "./action";


const CheckAvailability = ({onChangeStartDate,searchRequests,onChangeEndDate}) => {
    return(
        <div className="online_reservation">
            <div className="b_room">
                <div className="booking_room">
                    <h4>book a room online</h4>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                </div>
                <div className="reservation">
                    <ul>
                        <li className="span1_of_1">
                            <h5>type of room:</h5>
                            <div className="section_room">
                                <select id="country"
                                        className="frm-field required">
                                    <option value="null">Select a type of room</option>
                                    <option value="null">Suite room</option>
                                    <option value="AX">Single room</option>
                                    <option value="AX">Double room</option>
                                </select>
                            </div>
                        </li>
                        <li className="span1_of_1 left">
                            <h5>check-in-date:</h5>
                            <div className="book_date">
                                <form>
                                <DatePicker className="date" id="datepicker1"
                                            dateFormat="yyyy/MM/dd"
                                            selected={searchRequests.startDate && creteDate(searchRequests.startDate.split("T")[0] + "T18:30:00.000Z")}
                                            onChange={onChangeStartDate}
                                            disabledKeyboardNavigation={true}
                                            minDate={new Date()}
                                            maxDate={searchRequests.endDate && creteDate(searchRequests.endDate.split("T")[0] + "T18:30:00.000Z")}

                                />
                                </form>
                            </div>
                        </li>
                        <li className="span1_of_1 left">
                            <h5>check-out-date:</h5>
                            <div className="book_date">
                                <form>
                                    <DatePicker className="date" id="datepicker1"
                                                dateFormat="yyyy/MM/dd"
                                                selected={searchRequests.endDate && creteDate(searchRequests.endDate.split("T")[0] + "T18:30:00.000Z")}
                                                onChange={onChangeEndDate}
                                                disabledKeyboardNavigation={true}
                                                minDate={searchRequests.startDate && creteDate(searchRequests.startDate.split("T")[0] + "T18:30:00.000Z")|| new Date()}

                                    />
                                </form>
                            </div>
                        </li>
                        <li className="span1_of_2 left">
                            <h5>Adults:</h5>
                            <div className="section_room">
                                <select id="country"
                                        className="frm-field required">
                                    <option value="null">1</option>
                                    <option value="null">2</option>
                                    <option value="AX">3</option>
                                    <option value="AX">4</option>
                                </select>
                            </div>
                        </li>
                        <li className="span1_of_3">
                            <div className="date_btn">
                                <form>
                                    <input type="submit" defaultValue="book now"/>
                                </form>
                            </div>
                        </li>
                        <div className="clear"/>
                    </ul>
                </div>
                <div className="clear"/>
            </div>
        </div>
    );
};

const creteDate = (date) => {
    let newDate = new Date(date)
    newDate.setDate(newDate.getDate() - 1);
    return newDate;
};

const mapStateToProps = state => {
    return {
        searchRequests:state.search.searchRequest
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onChangeStartDate: (date) => {
            date.setDate(date.getDate() + 1);
            let dateString = JSON.stringify(date).split("T")[0].replace('"','') + "T00:00:00.000Z";
            dispatch(selectStartDate(dateString))
        },
        onChangeEndDate: (date) => {
            date.setDate(date.getDate() + 1);
            let dateString = JSON.stringify(date).split("T")[0].replace('"','') + "T00:00:00.000Z";
            dispatch(selectEndDate(dateString))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckAvailability)
