package com.myportfy.services.serviceImpl;

import com.myportfy.domain.Template;
import com.myportfy.dto.DtoDomain;
import com.myportfy.dto.template.NavbarDto;
import com.myportfy.repositories.TemplateRepository;
import com.myportfy.services.ITemplateService;
import com.myportfy.services.IUserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
@Slf4j
public class TemplateServiceImpl implements ITemplateService {

    @Autowired
    private TemplateRepository templateRepository;
    @Autowired
    private IUserService userService;


    @Override
    public Page<DtoDomain> findAll(Pageable pageable) {
        return null;
    }

    @Override
    public Page<?> findAllGeneric(Pageable pageable) {
        return null;
    }

    @Override
    public Template findById(Long id) {
        return templateRepository.findById(id).get();
    }

    @Override
    public void create(Template object) {
        object.setOwner(userService.findById(userService.currentUserLoggedIn().getId()));
        templateRepository.save(object);
    }

    @Override
    public void create(Template object, Object arg) {}

    @Override
    public Template update(Template object) {
        return null;
    }

    @Override
    public Template update(Template object, Object arg) {
        return null;
    }

    @Override
    public void delete(Long id) {

    }

    @Override
    public void saveNavbar(NavbarDto navbar) {
        // TEST
        Template template = new Template();
        template.setNavbar(navbar);
        create(template);
    }
}
