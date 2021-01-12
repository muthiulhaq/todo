import React, { Component } from 'react'

class Footer extends Component {
    render() {
        return (
            <div>
                <div className='container mt-3 pb-2'>
                    <div className='row'>
                            <div className='col-sm-6 text-left text-xs-center'>
                            This Todo App all rights are reserved under <a href='https://cydev.net/' target='_blank'>www.cydev.net</a>
                            </div>
                            <div className='col-sm-6 text-right text-xs-center'>
                                <a href='https://cydev.net/' target='_blank'>Help & Support</a>     
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}

export default Footer