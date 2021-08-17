import axios from 'axios';

const DOMAIN_API_BASE_URL = "http://194.1.238.49:8888/api/v1/domains";

class DomainService {

    getDomains(){
        return axios.get(DOMAIN_API_BASE_URL);
    }

    createDomain(domain){
        return axios.post(DOMAIN_API_BASE_URL, domain);
    }

    getDomainById(domainId){
        return axios.get(DOMAIN_API_BASE_URL + '/' + domainId);
    }

    updateDomain(domain, domainId){
        return axios.put(DOMAIN_API_BASE_URL + '/' + domainId, domain);
    }

    deleteDomain(domainId){
        return axios.delete(DOMAIN_API_BASE_URL + '/' + domainId);
    }
}

export default new DomainService()