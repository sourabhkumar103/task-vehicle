import React from 'react';
import {
     Row, Col, FormGroup, Label, Input
} from 'reactstrap';
import { Modal, Table } from "react-bootstrap";
import axios from 'axios';
import Image1 from '../images/Mercedes1.jpg'
import Image2 from '../images/Maruti_Alto.jpg'
import Image3 from '../images/Maruti_Benz.jpg'
import Image4 from '../images/Maruti_Ertiga.jpeg'
import Image5 from '../images/Maruti_Scross.jpeg'
import Image6 from '../images/Maruti_Swift.jpeg'
import Image7 from '../images/Maruti_Wagonr.jpeg'


class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            modal: false,
            modelName: '',
            name: '',
            price: '',
            image: '',
            color: '',
            modelData: [
                { id: 1, modelName: 'C-43', name: 'Mercedes-Benz', color: 'white', image: Image1, price: 3434009 },
                { id: 2,  modelName: 'Alto',  name: 'Maruti-Suzuki', color: 'Red', image: Image2, price: 545000 },
                { id: 3,  modelName: 'Benz',  name: 'Maruti-Suzuki', color: 'Royal_Blue', image: Image3, price: 940000 },
                { id: 4,  modelName: 'Ertiga',  name: 'Maruti-Suzuki', color: 'Red', image: Image4, price: 108000 },
                { id: 5,  modelName: 'S-Cross',  name: 'Maruti-Suzuki', color: 'Blue', image: Image5, price: 934009 },
                { id: 6,  modelName: 'Swift',  name: 'Maruti-Suzuki', color: 'Red', image: Image6, price: 835000 },
                { id: 7,  modelName: 'WagonR',  name: 'Maruti-Suzuki', color: 'Light_Blue', image: Image7, price: 754000 },
                { id: 8,  modelName: 'Alto',  name: 'Maruti-Suzuki', color: 'Red', image: Image2, price: 545000 },
                { id: 9,  modelName: 'Benz',  name: 'Maruti-Suzuki', color: 'Royal_Blue', image: Image3, price: 940000 },
                { id: 10,  modelName: 'Ertiga',  name: 'Maruti-Suzuki', color: 'Red', image: Image4, price: 108000 },
                { id: 11,  modelName: 'S-Cross',  name: 'Maruti-Suzuki', color: 'Blue', image: Image5, price: 934009 },
                { id: 12,  modelName: 'Swift',  name: 'Maruti-Suzuki', color: 'Red', image: Image6, price: 835000 },
                { id: 13,  modelName: 'WagonR',  name: 'Maruti-Suzuki', color: 'Light_Blue', image: Image7, price: 754000 },
            ]
        }
       
    }
    hideDialogBtn = () => {
        this.setState({ modal: false });
    }
    handleOpenModal = () => {
        this.setState({ modal: true });
    };
    handleChange(e) {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value,
        });
    }
    componentDidMount() {
    this.fetchData()    
    }
    fetchData() {
        axios.get('http://pikpart-staging.herokuapp.com/api/vehicle/model').then( (res) => {
                console.info(res)
        }).catch( err => {

        })
    }
    update(data) {
        this.setState({
            modelName: data.modelName,
            name: data.name,
            color: data.color,
            price: data.price,
            image: data.image
        })
        this.handleOpenModal()
    }
   
    submitModal(e) {
        e.preventDefault();
        this.hideDialogBtn();
       alert('update successfully !')
    }
    render() {
        const { modal, modelData, modelName,name,price,image,color} = this.state;
        return (
            <div class="container mt-4">

                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Image</th>
                            <th>Model </th>
                            <th>Item</th>
                            <th>Color</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                           {
                            modelData &&  modelData.map( item => {
                                    return <tr>
                                            <td>{item.id}</td>
                                        <td><img src={item.image} width={85} height={70}/></td>
                                            <td>{item.modelName}</td>
                                            <td>{item.name}</td>
                                            <td>{item.color}</td>
                                            <td>Rs.{item.price}/-</td>
                                            <td><button class="btn btn-sm btn-primary" onClick={() => this.update(item)}> update</button></td>
                                        </tr>
                                })
                           }
                    </tbody>
                </Table>


                <Modal backdrop="static" keyboard={false} show={modal} toggle={this.hideDialogBtn} centered>
                    <Modal.Header style={{ marginTop: '0px', display: 'block' }} className="bg-light">
                        <div class="display-block darkBlue fw6">Your Item Details!</div>
                        <span class="text-black font-14">update your details as you want </span>
                    </Modal.Header>
                    <Modal.Body>
                        <Row className="mt-2 m-0 justify-content-center align-items-center">
                            <Col md="8" className=" m-0">
                               
                                <FormGroup className="mb-2">
                                    <Label className="font-14 fw5 mb-1">Item Name <span class="required-field"></span></Label>
                                    <div className="inputGroup">
                                        <Input type="text" value={name} name="name" className="form-control" onChange={(e) => this.handleChange(e)} placeholder=" " />
                                    </div>
                                </FormGroup>
                            </Col>
                            <Col md="4" className=" m-0">
                                <FormGroup className="mb-2">
                                    <div className="inputGroup">
                                        <img src={image} width={120} height={100} />
                                    </div>
                                </FormGroup>
                            </Col>
                            <Col md="12" className=" m-0">
                                <FormGroup className="mb-2">
                                    <Label className="font-14 fw5 mb-1">Model <span class="required-field"></span></Label>
                                    <div className="inputGroup">
                                        <Input type="text" value={modelName} name="modelName" className="form-control" onChange={(e) => this.handleChange(e)} placeholder=" " />
                                    </div>
                                </FormGroup>
                            </Col>
                            <Col md="12" className=" m-0">
                                <FormGroup className="mb-2">
                                    <Label className="font-14 fw5 mb-1">Color <span class="required-field"></span></Label>
                                    <div className="inputGroup">
                                        <Input type="text" value={color} name="color" className="form-control" onChange={(e) => this.handleChange(e)} placeholder=" " />
                                    </div>
                                </FormGroup>
                            </Col>
                            <Col md="12" className=" m-0">
                                <FormGroup className="mb-2">        
                                    <Label className="font-14 fw5 mb-1">Price <span class="required-field"></span></Label>
                                    <div className="inputGroup">
                                        <Input type="number" value={price} name="price" className="form-control" onChange={(e) => this.handleChange(e)} placeholder=" " />
                                    </div>
                                </FormGroup>
                            </Col>
                        </Row>
                    </Modal.Body>
                    <Modal.Footer>
                        <button className="btn-sm radius-md btn bg-transparent" onClick={this.hideDialogBtn}>
                            Cancel
                        </button>
                        <button className="btn-sm radius-md btn btn-primary" onClick={(ev) => this.submitModal(ev)}>
                            Submit
                        </button>{' '}

                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default Home;