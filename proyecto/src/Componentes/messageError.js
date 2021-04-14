import React, { Component } from 'react';
// ------------------------ JQUERY ------------------------------------
import $ from 'jquery'
// ------------------------ Iconos ------------------------------------
//import { faCheckCircle, faExclamationTriangle, faTimes} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class ShowError extends Component{
    constructor(props){
        super(props);  
        
        this.state = {
            messageError: props.message,
            showError: true,  
            nameClass: props.name,
            type_alert: props.type,
            icon: props.alert_icon,
            notify: props.notify,     
            bodyNotify: props.body,
            headerNotify: props.header,
            idNotify: props.id,
        };   
        
        this.closeErrorMessage = this.closeErrorMessage.bind(this);
    }

    render(){
        if(this.state.notify) {
            return(
                <> 
                    {this.showNotify()}
                </>
            );
        }else {
            return(
                <>                
                    {this.showMessageError()}
                </>            
            );
        }
    }

    
    /* Mensaje de error */
    showMessageError() {
        //console.log("Error", this.state.messageError, this.state.showError);
        if(this.state.showError) {            
            let typeClass = "alert alert-dismissible fade show margen_alertDanger " + this.state.type_alert;
            return(
                <>
                <div className={typeClass} role="alert">
                    <span className="input-group-addon margen-icono">
                        <FontAwesomeIcon icon={this.state.icon}/>
                    </span>
                    <strong id="mensaje_error">{this.state.messageError}</strong>
                    <button type="button" className="close close_alert_danger"  onClick={this.closeErrorMessage} aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>                             
                </>
            );                
        }
    }

    showNotify() {
        let typeClass = "toast alert"+ this.state.nameClass;
        return(            
            <>            
                {/* NOTIFICACION DE ERROR O EXITO */}
                <div className={typeClass} id={this.state.idNotify}>
                    <div className="toast-header">
                        <strong className="mr-auto"><FontAwesomeIcon icon={this.state.icon} /> {this.state.headerNotify} </strong>                        
                        <button type="button" className="ml-2 mb-1 close" data-dismiss="toast">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="toast-body">
                        <div> {this.state.bodyNotify} </div>
                    </div>
                </div>
            </>
        );
    }

    closeErrorMessage(){                        
        $('.'+this.state.nameClass).hide();
    }
};


export default ShowError;