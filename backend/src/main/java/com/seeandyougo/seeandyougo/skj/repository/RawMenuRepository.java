package com.seeandyougo.seeandyougo.skj.repository;

import com.seeandyougo.seeandyougo.skj.table.RawMenu;
import com.seeandyougo.seeandyougo.skj.table.RawWifi;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.List;

@Repository
@RequiredArgsConstructor
public class RawMenuRepository {
    private final EntityManager em;

    public void save(RawMenu menu){em.persist(menu);}

    public RawMenu findOne(Long id){return em.find(RawMenu.class, id);}

    public List<RawMenu> findAll(){
        return em.createQuery("select r from RawMenu r", RawMenu.class)
                .getResultList();
    }

    public void deleteAll(){
        em.createQuery("DELETE FROM RawMenu").executeUpdate();
    }

}
