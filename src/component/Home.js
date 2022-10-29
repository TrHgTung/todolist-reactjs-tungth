import React, { useEffect } from "react";

function Home(props) {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "Trang chủ";
    }, []);

    return (
        <div className="Home">
            <center>
                <h1>ỨNG DỤNG TO DO LIST</h1>
            </center>

            <div classname="body-part">
                <table>
                    <tr className='home-name'>
                        <td className='table-col-title'>
                            Họ tên:
                        </td>
                        <td className='table-col-info'>
                            Trịnh Hoàng Tùng
                        </td>

                    </tr>
                    <tr className='home-id'>
                        <td className='table-col-title'>
                            MSSV:
                        </td>
                        <td className='table-col-info'>
                            46.01.104.211
                        </td>
                    </tr>

                    <tr className='home-email'>
                        <td className='table-col-title'>
                            E-mail liên hệ:
                        </td>
                        <td className='table-col-info'>
                            4601104211@student.hcmue.edu.vn
                        </td>
                    </tr>

                    <tr className='home-contact'>
                        <td className='table-col-title'>
                            Github cá nhân:
                        </td>
                        <td className='table-col-info'>
                            github/@TrHgTung
                        </td>
                    </tr>

                    <tr className='home-school'>
                        <td className='table-col-title'>
                            Trường ĐH Sư Phạm TPHCM
                        </td>
                        <td className='table-col-info'>
                            - Khoa Công nghệ thông tin
                        </td>
                    </tr>
                </table>
            </div>

        </div>
    );
}

export default Home;