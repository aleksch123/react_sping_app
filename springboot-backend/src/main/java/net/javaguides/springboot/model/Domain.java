package net.javaguides.springboot.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "domains_list")
public class Domain {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "domain_url")
	private String domainUrl;

	@Column(name = "domain_note")
	private String domainNote;
	

	
	public Domain() {
		
	}
	
	public Domain(String domainUrl, String domainNote) {
		super();
		this.domainUrl = domainUrl;
		this.domainNote = domainNote;

	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getDomainUrl() {return domainUrl;	}
	public void setDomainUrl(String domainUrl) {
		this.domainUrl = domainUrl;
	}
	public String getDomainNote() {
		return domainNote;
	}
	public void setDomainNote(String domainNote) {
		this.domainNote = domainNote;
	}

}
