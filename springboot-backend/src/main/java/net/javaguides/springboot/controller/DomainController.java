package net.javaguides.springboot.controller;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


import net.javaguides.springboot.model.Domain;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.javaguides.springboot.exception.ResourceNotFoundException;
import net.javaguides.springboot.repository.DomainRepository;


import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;


@CrossOrigin(origins = "http://194.1.238.49:3000")
@RestController
@RequestMapping("/api/v1/")


public class DomainController {

	@Autowired
	private DomainRepository  domainRepository;

	@Bean
	public CorsFilter corsFilter() {
		UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
		CorsConfiguration config = new CorsConfiguration();
		config.setAllowedOrigins(Arrays.asList("*"));
		config.setAllowCredentials(true);
		config.addAllowedOrigin("*");
		config.addAllowedHeader("*");
		config.addAllowedMethod("OPTIONS");
		config.addAllowedMethod("GET");
		config.addAllowedMethod("POST");
		config.addAllowedMethod("PUT");
		config.addAllowedMethod("DELETE");
		source.registerCorsConfiguration("/**", config);
		return new CorsFilter(source);
	}

	// get all domains
	@GetMapping("/domains")
	public List<Domain> getAllDomains(){return domainRepository.findAll();
	}

	// create domains rest api
	@PostMapping("/domains")
	public Domain createDomain(@RequestBody Domain domain) {return domainRepository.save(domain);
	}

	// get domain by id rest api
	@GetMapping("/domains/{id}")
	public ResponseEntity<Domain> getDomainById(@PathVariable Long id) {
		Domain employee = domainRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Domain not exist with id :" + id));
		return ResponseEntity.ok(employee);
	}

	// update domain rest api

	@PutMapping("/domains/{id}")
	public ResponseEntity<Domain> updateDomain(@PathVariable Long id, @RequestBody Domain domainDetails){
		Domain employee = domainRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Domain not exist with id :" + id));

		employee.setDomainUrl(domainDetails.getDomainUrl());
		employee.setDomainNote(domainDetails.getDomainNote());

		Domain updatedDomain = domainRepository.save(employee);
		return ResponseEntity.ok(updatedDomain);
	}

	// delete domain rest api
	@DeleteMapping("/domains/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteDomain(@PathVariable Long id){
		Domain employee = domainRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Domain not exist with id :" + id));

		domainRepository.delete(employee);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}


}