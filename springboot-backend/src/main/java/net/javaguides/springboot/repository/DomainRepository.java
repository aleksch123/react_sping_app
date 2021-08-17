package net.javaguides.springboot.repository;

import net.javaguides.springboot.model.Domain;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DomainRepository extends JpaRepository<Domain, Long>{

}
