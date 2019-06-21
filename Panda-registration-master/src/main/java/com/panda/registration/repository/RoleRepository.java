package com.panda.registration.repository;

import java.util.Optional;

import com.panda.registration.entity.Role;
import com.panda.registration.entity.RoleName;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByName(RoleName roleName);
}