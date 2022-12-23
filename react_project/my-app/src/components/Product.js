import React from "react";

class Product extends React.Component {

    constructor() {
        super();
        this.state = {
            motor: [
                {
                    id:"1",
                    name: "Dream",
                    price: "10000",
                    producer: "Honda"
                },
                {
                    id: "2",
                    name: "Exciter",
                    price: "10000",
                    producer: "Yamaha"
                },
                {
                    id: "3",
                    name: "S1000RR",
                    price: "100000",
                    producer: "BMW"
                }
            ]
        }
    }

    render() {
        return (

            <table class="table">
            <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Tên</th>
            <th scope="col">Giá</th>
            <th scope="col">Nhà sản xuất</th>
        <th colSpan={4}>Chức năng</th>
        </tr>
        </thead>
        <tbody>
        {this.state.motor.map((moto, i) =>
                <tr>
                <th scope="row">{i + 1}</th>
            <td>{moto.name}</td>
            <td>{moto.price}</td>
            <td>{moto.producer}</td>
            <button style={{background: "red"}}>Thêm</button>
        <button style={{background: "green"}}>Sửa</button>
        <button style={{background: "yellow"}}>Xóa</button>
        </tr>
    )}
    </tbody>
        </table>

    )
    }
}

export default Product
